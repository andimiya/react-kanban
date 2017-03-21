const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const bp = require('body-parser')
const db = require('./models')
const { Card } = db

app.use(bp.urlencoded({ extended: true }))

app.post('/new', (req, res) => {
  Card.create({
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status
  })
    .then(card => {
      res.send('success')
    })
    .catch(() => {
      res.send('error')
    })
})

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`)
})
