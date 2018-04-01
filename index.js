/**
 * @overview
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license MIT
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 * @preserve
 */

'use strict';

/*jshint node:true*/

var http = require('http');
var url = require('url');

var Agent = require('./lib/Agent');

exports.request = function(options, cb) {
	if (typeof options === 'string') {
		options = url.parse(options);
	}

	if (!options.port) {
		options.port = 80;
	}

	options.agent = new Agent(options);
	return http.request(options, cb);
};

exports.Agent = Agent;

exports.get = function(options, cb) {
	var req = exports.request(options, cb);

	req.end();

	return req;
};
