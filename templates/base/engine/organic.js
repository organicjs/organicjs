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
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');

/**
 * Load environment settings.
 */
dotenv.config();

/**
 * Instantiate express.
 */
const app = express();

/**
 * Set config on express instance.
 */
app.set('config', require('./app-config'));

/**
 * Add static path middleware.
 */
app.use(express.static(path.join(__dirname, '..', 'public')));	

/**
 * Require application level middlewares.
 */
require('../middlewares/main')(app);

/**
 * Bind app with the views.
 */
require('./view-binder')(app);

/**
 * Bind app with the routes.
 */
require('./app-binder')(app);

/**
 * Bind error handler.
 */
require('./error-binder')(app);

/**
 * Start the server.
 */
require('./app-server')(app);

/**
 * Export the app object.
 */
module.exports = app;