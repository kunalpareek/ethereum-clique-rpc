var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

let server = require('./../app');

describe('routes', function() {

  beforeEach(function(done) {
    done();
  });

  afterEach(function(done) {
    done();
  });

  describe('GET /v1/health', function() {
    it('should return response if server is alive', function(done) {
      chai.request(server)
      .get('/v1/health')
      .end(function(err, res) {
        res.redirects.length.should.equal(0);
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        done();
      });
    });
  });

  describe('GET /', function() {
    it('should throw an error', function(done) {
      chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.redirects.length.should.equal(0);
        res.status.should.equal(404);
        res.type.should.equal('text/html');
        done();
      });
    });
  });

});