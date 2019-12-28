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
 * Export function.
 *
 * @param {app} The Express instance.
 * @public
 */

module.exports = function (app) {

	/**
	 * Set 404.
	 */
	app.use(function (req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	/**
	 * Set error handler.
	 */
	app.use(function (err, req, res) {
		res.locals.message = err.message;
		res.locals.error = process.env.NODE_ENV === 'development' ? err : {};
		res.status(err.status || 500);
		res.send('error');
	});

};