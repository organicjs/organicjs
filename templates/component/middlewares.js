module.exports = function(router) {
	
    /**
	 * Here goes all your 'router-level' middlewares.
	 *
	 * Notice that the framework injects the express.Router() instance
	 * in the router parameter above. This is completely inline with the
	 * Express router level mniddlewares.
	 *
	 * You may define as many middlewares as you require. For more details,
	 * visit link: http://organicjs.github.com/docs/middlewares
	 */
	
	/**
	 * Example middlewares.
	 *
	 * All requests to the current component passes through this middleware.
	 * Delete this 
	 */
	router.use('/', function(req, res, next) {
        console.log('Inside Middleware!!');
        next();
    });
	
};