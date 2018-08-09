# FCC Timestamp Microservice

The API endpoint is a GET request to `/api/timestamp/:time?`

Validates a time string and returns a JSON response of the string formatted as UNIX time and UTC time. Invalid dates will return an error.

A time string is valid if can be successfully parsed by `new Date()`.

An empty time string will return the current time.

### Prerequisites

Node.js 8.10+

### Installing

```
yarn install

npm start
```

### Testing

`yarn test`


Local Demo: `localhost:8000/api/timestamp`

Live Demo: https://fcc-timestamp-microservice-jp.glitch.me/api/timestamp/

Current Time: https://fcc-timestamp-microservice-jp.glitch.me/api/timestamp/

UNIX Time: https://fcc-timestamp-microservice-jp.glitch.me/api/timestamp/1460678400

UTC Time: https://fcc-timestamp-microservice-jp.glitch.me/api/timestamp/2016-04-15


Example Output:
```
{
  unix: 1460678400,
  utc: "2016-04-15"
}
```
Example Error:
```
{
  statusCode: 400,
  error: "Bad Request",
  message: "Invalid Date"
}
```