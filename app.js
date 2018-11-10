const express = require('express');
// import express from 'express';
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Yo hello McFly');
});

app.listen(3000, () => {
  console.log('Server started on Port 3000...')
})
