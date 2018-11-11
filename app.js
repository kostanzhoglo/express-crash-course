const express = require('express');
// import express from 'express';
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator')

const app = express();

// MIDDLEWARE
// const logger = (req, res, next) => {
//   console.log('Logging...');
//   next();
// }
//
// app.use(logger);

// Views Engine
app.set('view engine', 'ejs');
// Connect app to VIEWS folder
app.set('views', path.join(__dirname, 'views'));

// Body Parser MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Set Static Path - static (or 'Public' folder) is for holding static files -- CSS files, jQuery, etc.
app.use(express.static(path.join(__dirname, 'public')))

// const people = [
//   {
//     name: 'Jeff',
//     age: 30
//   },
//   {
//     name: 'Vanessa',
//     age: 27
//   }
// ]

const users = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@gmail.com'
  },
  {
    id: 2,
    first_name: 'Bob',
    last_name: 'Smith',
    email: 'bobsmith@gmail.com'
  },
  {
    id: 3,
    first_name: 'Jill',
    last_name: 'Jackson',
    email: 'jilljackson@gmail.com'
  }
]

app.get('/', (req, res) => {
  // res.send('Yo hello McFly. Anybody home?');
  // res.json(people)
  res.render('index', {
    title: 'Customers',
    users: users
  });
});

app.listen(3000, () => {
  console.log('Server started on Port 3000...')
})
