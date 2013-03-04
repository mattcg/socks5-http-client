/**
 * @overview
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license Creative Commons Attribution 3.0 Unported (CC BY 3.0)
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 * @preserve
 */

'use strict';

/*jshint node:true*/

var net = require('net');
var http = require('http');
var inherits = require('util').inherits;
var socks = require('socks5-client');

function Socks5ClientHttpAgent(options) {
	http.Agent.call(this, options);

	this.socksHost = options.socksHost || '127.0.0.1';
	this.socksPort = options.socksPort || 1080;
	this.createConnection = socks.createConnection;
}

inherits(Socks5ClientHttpAgent, http.Agent);

module.exports = Socks5ClientHttpAgent;
