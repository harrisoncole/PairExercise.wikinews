const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
 res.send('wiki all');
})

router.post('/', (req, res, next) => {
  res.send('test post');
})

router.get('/add', (req, res, next) => {
  res.send('wiki add');
})

module.exports = router

