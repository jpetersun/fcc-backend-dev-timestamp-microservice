const express = require('express')
const moment = require('moment')

const app = express()
const PORT = process.env.PORT || 8000

app.get('*', (req, res) => {
  const time = decodeURI((req.path).slice(1))
  const unixStr = /\b\d{10}\b/.test(time)
  const naturalStr = /\b\w+\s\d{2},\s\d{4}\b/.test(time)

  let unix = null
  let natural = null

  if (unixStr) {
    unix = Number(time)
    natural = moment.unix(unix).format('LL')
  }

  if (naturalStr) {
    const date = new Date(time)
    unix = Number(moment(date).format('X'))
    natural = time
  }

  const timeStamp = {
    unix,
    natural
  }

  res.json(timeStamp)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
