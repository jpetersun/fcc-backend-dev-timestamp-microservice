const express = require('express')
const address = require('address')
const useragent = require('useragent')

const app = express()
const PORT = process.env.PORT || 8000

app.get('/api/whoami', (req, res) => {
  const agent = useragent.parse(req.headers['user-agent'])

  const software = agent.os.toString()
  const ipaddress = address.ip()
  const language = req.headers['accept-language'].slice(0,5)

  const headerParser = {
    ipaddress,
    language,
    software
  }

  res.json(headerParser)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
