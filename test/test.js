const chai = require('chai')
const should = chai.should()
const app = require('../index')
const request = require('supertest')

describe('GET /api/timestamp/1460678400', () => {
  it('should respond with a timestamp', done => {
    request(app)
      .get('/api/timestamp/1460678400')
      .then(res => {
        res.status.should.equal(200)
        res.type.should.equal('application/json')
        res.body.unix.should.equal(1460678400)
        res.body.utc.should.equal('2016-04-15')
        done()
      })
      .catch(err => {
        console.error(err)
      })
  })

  it('should respond with an error', done => {
    request(app)
      .get('/api/timestamp/abc')
      .then(res => {
        res.status.should.equal(400)
        res.type.should.equal('application/json')
        res.body.message.should.equal('Invalid Date')
        done()
      })
      .catch(err => {
        console.error(err)
      })
  })
})

describe('GET /api/timestamp/2016-04-15T00:00:00.000Z', () => {
  it('should respond with a timestamp', done => {
    request(app)
      .get('/api/timestamp/2016-04-15T00:00:00.000Z')
      .then(res => {
        res.status.should.equal(200)
        res.type.should.equal('application/json')
        res.body.unix.should.equal(1460678400)
        res.body.utc.should.equal('2016-04-15')
        done()
      })
      .catch(err => {
        console.error(err)
      })
  })

  it('should respond with an error', done => {
    request(app)
      .get('/api/timestamp/2016-04-155ZZ')
      .then(res => {
        res.status.should.equal(400)
        res.type.should.equal('application/json')
        res.body.message.should.equal('Invalid Date')
        done()
      })
      .catch(err => {
        console.error(err)
      })
  })
})

describe('GET /api/timestamp/2017-07-20', () => {
  it('should respond with a timestamp', done => {
    request(app)
      .get('/api/timestamp/2017-07-20')
      .then(res => {
        res.status.should.equal(200)
        res.type.should.equal('application/json')
        res.body.unix.should.equal(1500508800)
        res.body.utc.should.equal('2017-07-20')
        done()
      })
      .catch(err => {
        console.error(err)
      })
  })

  it('should respond with an error', done => {
    request(app)
      .get('/api/timestamp/2017-07-20T00:00:00.00Zz')
      .then(res => {
        res.status.should.equal(400)
        res.type.should.equal('application/json')
        res.body.message.should.equal('Invalid Date')
        done()
      })
      .catch(err => {
        console.error(err)
      })
  })
})

describe('GET /api/timestamp', () => {
  it('should respond with a timestamp', done => {
    request(app)
      .get('/api/timestamp')
      .then(res => {
        res.status.should.equal(200)
        res.type.should.equal('application/json')
        done()
      })
      .catch(err => {
        console.error(err)
      })
  })
})

describe('GET /api/timestamp/test-error', () => {
  it('should respond with an error', done => {
    request(app)
    .get('/api/timestamp/test-error')
    .then(res => {
      res.status.should.equal(400)
      res.type.should.equal('application/json')
      res.body.message.should.equal('Invalid Date')
      done()
    })
    .catch(err => {
      console.error(err)
    })
  })
})
