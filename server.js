var express = require('express');
var http = require('http');
var server = express();
server.use('/',express.static('public'));

http.createServer(server).listen(80);

