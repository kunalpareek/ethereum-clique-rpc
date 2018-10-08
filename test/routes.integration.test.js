/* eslint-env mocha */

var chai = require('chai')
var chaiHttp = require('chai-http')
chai.use(chaiHttp)

let server = require('./../app')

describe('routes', () => {
  beforeEach(done => {
    done()
  })

  afterEach(done => {
    done()
  })

  describe('GET /v1/health', () => {
    it('should return response if server is alive', done => {
      chai.request(server)
        .get('/v1/health')
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            res.redirects.length.should.equal(0)
            res.status.should.equal(200)
            res.type.should.equal('application/json')
            done()
          }
        })
    })
  })

  describe('GET /', () => {
    it('should throw an error', done => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            res.redirects.length.should.equal(0)
            res.status.should.equal(404)
            res.type.should.equal('text/html')
            done()
          }
        })
    })
  })
})
