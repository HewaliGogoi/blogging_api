const express = require('express');
const app = express();
const blogController = require('./blog.controller');

app.use(express.json([]));

app.use('/', blogController);
module.exports = app;