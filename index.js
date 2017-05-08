const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB setup

mongoose.connect('mongodb://localhost:auth/auth');

 
// App Setup

//middleware
app.use(morgan('combined'));  //morgan is a logging framework
app.use(bodyParser.json({type: '*/*'}));

router(app);

// Server Setup
const port = process.env.port || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);