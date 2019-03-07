const morgan = require('morgan');
const express = require('express');
const path = require('path')

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res, next) => {
   res.send('');
})

app.listen(2580, () => {
    console.log('Listening in on Port 2580!');
})