/**
 * @author Kunal Pareek (kunalp@outlook.in)
 * @desc Project entry point (main) file
 */

const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const winston = require('./logger/index');
const cors = require('cors');

var app = express();

app.use(cors());
app.use(morgan('combined', { stream: winston.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/v1', require('./api/routes'));

module.exports = app;
