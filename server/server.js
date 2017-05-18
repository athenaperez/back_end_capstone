'use strict'

const { json } = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
// requiring connect function using deconstruction from db.js
const { connect } = require('./database/database')

const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes/')

// app.use(express.static('client'))

// cors issues...cross origin requests...
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST,HEAD, OPTIONS,PUT, DELETE, PATCH");
  next();
});


app.use(json())
app.use(routes)


//_____________________________
//listen
connect()
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Hey, I'm listening on port ${PORT}`);
    })
  })
  .catch(console.error)

 //_____________________________

















