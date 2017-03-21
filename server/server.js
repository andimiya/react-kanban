const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const bp = require('body-parser')
const db = require('./models')
const { Card } = db

app.use(bp.urlencoded({ extended: true }))

app.get('/api', (req, res) => {
  Card.findAll()
  .then(cards => {
    res.json({ cards })
  })
  .catch(() => {
    res.send('error')
  })
})

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

app.put('/update/:id', (req, res) => {
  Card.update({
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status
  },
    { where: {
      id: req.params.id }
    })
    .then(card => {
      res.send('updated successfully')
    })
    .catch(() => {
      res.send('error')
    })
})

app.delete('/delete/:id', (req, res) => {
  Card.destroy(
    { where: {
      id: req.params.id }
    })
    .then(card => {
      res.send('successfully deleted')
    })
    .catch(() => {
      res.send('error')
    })
})

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`)
})
