const express = require('express')
const moment = require('moment')

const app = express()
const port = 8000

app.get('*', (req, res) => {

  const time = (req.path).slice(1)

  const natural = moment.unix(time)

  const timeStamp = {
    natural
  }
  res.json(timeStamp)
})

app.listen(port, () => console.log(`Listening on port: ${port}`))
