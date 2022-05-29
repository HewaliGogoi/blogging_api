const express = require('express');
const router = express.Router();

const blogSchema = require('../models/blog.models');
const crudController = require('./crud.controller');

router.post('/', crudController(blogSchema).postBlog);

router.get('/popularity', crudController(blogSchema).getBlogByPopularity);

router.get('/search', crudController(blogSchema).getBlogByAuthorAndTitle);

router.get('/id', crudController(blogSchema).getBlogById);

module.exports = router;

