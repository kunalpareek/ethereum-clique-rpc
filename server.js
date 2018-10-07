/**
 * @author Kunal Pareek (kunalp@outlook.in)
 * @desc Project entry point (main) file
 */

const express = require('express');
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const winston = require('./logger/index');
const config = require('./config/config');
const cors = require('cors');

var app = express();

app.use(cors());
app.use(morgan('combined', { stream: winston.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/v1', require('./api/routes'));

const server = http.createServer(app);

server.listen(config.port, (err) => {
    if (err)
        winston.log('error', "Server error", {"message": err});
    else
        winston.log('info', 'server running at  ' + config.port);
});
