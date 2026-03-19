require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Medhavi')
})

app.get('/x', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>Hello Medhavi</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Your port is ${port}. Open your browser and search localhost:${port}`)
})
