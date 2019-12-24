/**
 * OrganicJS - An extensible MVC framework for Node.js web development.
 *
 * @version 1.0.0
 * @author Pradeep T.
 *
 * Copyright(c) 2013 Pradeep T.
 * MIT Licensed
 */

'use strict';

/**
 * Export function.
 *
 * @param {app} The Express instance.
 * @public
 */
module.exports = function(app) {
	
	const port = process.env.PORT || 3000

	app.set('port', port);
	
	app.listen(port, function () {
		console.log(`Server listening on port ${port}!`);
	});

};