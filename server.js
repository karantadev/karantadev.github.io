const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname)))

app.get('/', (request, response) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    response.end(data)
  })
})

app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})
