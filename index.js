const express = require('express')

const app = express()
const port = 8000

app.get('/', (req, res) => {
  console.log(req.body)
  res.send('yo')
})

app.listen(port, () => console.log(`Listening on port: ${port}`))
