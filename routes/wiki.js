const express = require('express');
const addPage = require('../views/addPage.js');
const router = express.Router();
const { Page } = require('../models');

router.get('/', (req, res, next) => {
 res.send('wiki all');
})

router.post('/', async (req, res, next) => {

  const title = req.body.title;
  const content = req.body.content;

  function generateSlug (title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  }

  const slug = generateSlug(title);

  const page = new Page({
    title: title,
    content: content,
    slug: slug
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
  }

})

router.get('/add', (req, res, next) => {
  res.send(addPage());
})

module.exports = router
