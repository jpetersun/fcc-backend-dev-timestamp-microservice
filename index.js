const express = require('express')
const moment = require('moment')
const boom = require('boom')

const app = express()
const PORT = process.env.PORT || 8000

app.get('/api/timestamp/:time', (req, res, next) => {
  const { time } = req.params
  const isUnixTime = /\d+/.test(Number(time))
  const isUTCTime = /\b\w{4}-\w{2}-\w{2}\b/.test(time)

  if (!isUnixTime && !isUTCTime) {
    return next(boom.badRequest('invalid date'))
  }

  let unix = null
  let utc = null

  if (isUnixTime) {
    unix = Number(time)
    utc = moment.unix(unix).utc().format('YYYY-MM-DD')
  }

  if (isUTCTime) {
    const date = new Date(time)
    unix = Number(moment(date).utc().format('X'))
    utc = time
  }

  const timeStamps = {
    unix,
    utc
  }

  res.json(timeStamps)
})

// error handler middleware using boom
app.use((err, req, res, next) => {
  return res.status(err.output.statusCode).json(err.output.payload)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
