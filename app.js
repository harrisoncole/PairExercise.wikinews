const morgan = require('morgan');
const express = require('express');
const path = require('path')
const {db} = require('./models');
const layout = require('./views/layout');


const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res) => {
    res.send(layout(''));
});
app.get('/', (req, res, next) => {
   res.send('hello Nevin');
})

app.listen(2580, () => {
    console.log('Listening in on Port 2580!');
})


db.authenticate().
then(() => {
  console.log('connected to the database');
})

