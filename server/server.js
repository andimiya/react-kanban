const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()
const bp = require('body-parser')
const db = require('./models')
const { Card } = db

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())

var allowCrossDomain = function(req, res, next) {
    if ('OPTIONS' == req.method) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

app.get('/api', (req, res) => {
  Card.findAll()
  .then(cards => {
    res.json(cards)
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
      res.json(card)
    })
    .catch(() => {
      res.send('error')
    })
})

app.put('/update/:id', (req, res) => {
  Card.update({
    status: req.body.status
  },
    { where: {
      id: req.params.id
    }}
  )
  .then(card => {
    res.send('Success')
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
      res.json(card)
    })
    .catch(() => {
      res.send('error')
    })
})

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`)
})
