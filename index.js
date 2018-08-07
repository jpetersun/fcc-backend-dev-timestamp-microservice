const express = require('express')
const moment = require('moment')
const boom = require('boom')

const app = express()
const PORT = process.env.PORT || 8000

app.get('/api/timestamp/:time?', (req, res, next) => {
  // optional time parameter
  const { time } = req.params

  // validate time by creating Date objects
  const isValidUnixTime = new Date(Number(time)).toUTCString()
  const isValidTime = new Date(time).toUTCString()

  // check for valid dates and allow for time parameter to be optional
  if (isValidUnixTime === 'Invalid Date' && isValidTime === 'Invalid Date' && time !== undefined) {
    return next(boom.badRequest('Invalid Date'))
  }

  const isUnixTime = /\b\d{1,}\b/.test(Number(time))
  let unix = null
  let utc = null

  if (isUnixTime) {
    unix = Number(time)
    utc = moment.unix(unix).utc()
  }

  if (!isUnixTime && time) {
    const date = new Date(time)
    unix = Number(moment(date).utc().format('X'))
    utc = moment(time).utc()
  }

  // no time parameter, use current time
  if (!time) {
    const date = new Date().toUTCString()
    unix = Number(moment(date).utc().format('X'))
    utc = moment(date).utc()
  }

  const timeStamps = {
    unix,
    utc
  }

  res.json(timeStamps)
})

// error handler middleware using boom
app.use((err, req, res, next) => {
  console.log(err)
  return res.status(err.output.statusCode).json(err.output.payload)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
