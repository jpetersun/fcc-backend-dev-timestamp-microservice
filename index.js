const express = require('express')
const publicIp = require('public-ip')
const useragent = require('useragent')

const app = express()
const PORT = process.env.PORT || 8000

app.get('/api/whoami', (req, res) => {
  const agent = useragent.parse(req.headers['user-agent'])

  let ipaddress = null

  publicIp.v4().then(ip => {
    ipaddress = ip
  }).catch(e => {
    ipaddress = 'ip address error'
  }).then(() => {
    const software = agent.os.toString()
    const language = req.headers['accept-language'].slice(0,5)

    const headerParser = {
      ipaddress,
      language,
      software
    }

    res.json(headerParser)
  })
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
