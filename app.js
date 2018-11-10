const express = require('express');
// import express from 'express';
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// MIDDLEWARE
// const logger = (req, res, next) => {
//   console.log('Logging...');
//   next();
// }
//
// app.use(logger);

// Body Parser MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlendcoded({extended: false}))

// Set Static Path - static (or 'Public' folder) is for holding static files -- CSS files, jQuery, etc.
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Yo hello McFly');
});

app.listen(3000, () => {
  console.log('Server started on Port 3000...')
})
