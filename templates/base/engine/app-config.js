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

const env = process.env.NODE_ENV || 'development';

module.exports = require('../config/' + env);