const express = require('express')

const router = express.Router()

// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank')

// const app = express()

// app.get('/', function (req, res) {
//   let tweets = tweetBank.list()
//   res.render('index', { tweets: tweets })
// })

router.get('/', function (req, res) {
  let tweets = tweetBank.list()
  res.render('index', { tweets: tweets })
})

router.get('/test', function (req, res) {
  res.send('hola')
})

module.exports = router
