/**
 * OrganicJS - An extensible MVC framework for Node.js web development.
 *
 * @version 1.0.1
 * @author Pradeep T.
 *
 * Copyright(c) 2013 Pradeep T.
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */
const fs = require('fs');
const path = require('path');
const consolidate = require('consolidate');
// var pathExists = require('path-exists');

/**
 * Export the function.
 *
 * @param {app} The express instance.
 */
module.exports = function(app) {

    /**
     * Fetch configuration.
    */
    var config = app.get('config');

    /**
     * Set templating engine.
     * 
     * Not all template engines have out-of-the-box support 
     * for Express, nor do they have the same API.
     * 
     * Consolidate helps you defining a single way to call 
     * multiple template engines, so you can switch your 
     * template engine seamlessly and without effort.
     */ 
    app.engine('html', consolidate[config.express['view engine']]);
    app.set('view engine', config.express.extension);
    app.set('view cache', config.express['view cache']);
    //app.set('view options', {delimiter: '?'});	
    //app.set('view options', {open: '<?', close: '?>'});
   
    /**
     * Set views directory based on the url prefix in the configuration.
     *
     * We are trying to bind the 'views' directory per component. This essentially
     * enables us to separate views for each component from the other one. For
     * example, if your blog engine has two components: frontend and backend, they
     * both will have their own views directory.
     *
     * Also you may not require views for some components like when building
     * RESTful APIs. In those casse, we do not require to bind the view for the
     * component.
     * 
     */
    Object.keys(config.components).forEach(function(component) {
        
        var viewPath = path.join(__dirname, '../components', config.components[component], 'views');
        
        if (fs.existsSync(viewPath)) {
            bindView(component, viewPath);
        }
        
    });
    
    /**
     * Binds the view for the corresponding component.
     */
    function bindView(component, view) {
        app.use(component, function(req, res, next) {
            app.set('views', view);
            next();
        });
    }
		
};