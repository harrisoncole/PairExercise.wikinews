const express = require('express');
const addPage = require('../views/addPage.js')
const router = express.Router();

router.get('/', (req, res, next) => {
 res.send('wiki all');
})

router.post('/', (req, res, next) => {
  res.send(req.body);
})

router.get('/add', (req, res, next) => {
  res.send(addPage());
})

module.exports = router

