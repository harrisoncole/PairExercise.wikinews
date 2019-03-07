const express = require('express');
const addPage = require('../views/addPage.js');
const router = express.Router();
const { Page } = require('../models');

router.get('/', (req, res, next) => {
 res.send('wiki all');
})

router.post('/', async (req, res, next) => {
  const slug = req.body.title +'_'+req.body.author
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
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
