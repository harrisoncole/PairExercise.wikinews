const express = require('express');
const addPage = require('../views/addPage.js');
const router = express.Router();
const { Page } = require('../models');

router.get('/', (req, res, next) => {
 res.send('wiki all');
})

router.post('/', async (req, res, next) => {

  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  // try {
  //   await page.save();
  //   res.redirect('/');
  // } catch (error) {
  //   console.error(error);
  // }
  res.send(req.body.title);
})

router.get('/add', (req, res, next) => {
  res.send(addPage());
})

module.exports = router
