'use strict'

const express = require('express')
const mongoose = require('mongoose')
// requiring connect function using deconstruction from db.js
const { connect } = require('./database/database')

const app = express()
const PORT = process.env.PORT || 3000

const { Dog } = require('./models/models.js')


















//listen
connect()
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Hey, I'm listening on port ${PORT}`);
    })
  })
  .catch(console.error)
