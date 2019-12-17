//import server from 'express';

var server = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes/turmaRoutes');

var app = server();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/turmaDb");

app.use(bodyParser.json());

app.use('/static', server.static(__dirname + './../Exercício1'));

routes(app);

var port = 3002;

app.listen(port);