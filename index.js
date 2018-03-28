const express = require('express')
const moment = require('moment')

const app = express()
const port = 8000

app.get('*', (req, res) => {

  const time = (req.path).slice(1)
  let naturl = null
  let unix = null

  if (time === unixStr) {
    natural = moment.unix(time).format('MMMM DD, YYYY')
    unix = time
  }

  if (time === naturalStr) {

  }

  const timeStamp = {
    unix,
    natural
  }
  res.json(timeStamp)
})

app.listen(port, () => console.log(`Listening on port: ${port}`))
