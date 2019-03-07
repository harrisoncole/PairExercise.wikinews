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


  const page = new Page({
    title: title,
    content: content,
    slug: 'placeholder'
  });

  try {
    await page.save();
    res.redirect('/');
    console.log(req.body);
  } catch (error) {
    console.error(error);
  }

})

router.get('/add', (req, res, next) => {
  res.send(addPage());
})

module.exports = router
