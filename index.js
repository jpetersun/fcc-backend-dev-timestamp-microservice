const express = require('express')
const useragent = require('useragent')
const requestIp = require('request-ip')

const app = express()
const PORT = process.env.PORT || 8000

app.use(requestIp.mw())

app.get('/api/whoami', (req, res) => {
  const agent = useragent.parse(req.headers['user-agent'])

  const ipaddress = req.clientIp
  const software = agent.os.toString()
  const language = req.headers['accept-language'].slice(0,5)

  const headerParser = {
    ipaddress,
    language,
    software
  }

  res.json(headerParser)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
