const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world, this is status'
  })
})

app.get('/', (req, res) => {
  res.send({
    message: 'hello world, this is root'
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `${req.body.email}: hello world, this is post, this is from register`,
    password: `${req.body.password}`
  })
})

app.listen(process.env.PORT || 8081)
