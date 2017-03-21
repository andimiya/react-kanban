const express = require('express')
const PORT = process.env.PORT || 3000
const bp = require('body-parser')

app.use(bp.urlencoded({ extended: true }))

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`)
})
