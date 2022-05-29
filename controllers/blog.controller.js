const express = require('express');
const router = express.Router();

const blogSchema = require('../models/blog.models');
const crudController = require('./crud.controller');

router.post('/', crudController(blogSchema).postBlog);

module.exports = router;
