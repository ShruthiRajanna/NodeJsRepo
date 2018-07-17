//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let mocha = require('mocha');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);

//Our parent block
describe('Test', () => {
 /*
  * Test the /GET route
  */
  describe('/GET ', () => {
	  it('it should GET all the Test', (done) => {
			chai.request(server)
		    .get('/')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	// res.body.should.be.a('array');
			  	// res.body.length.should.be.eql(0);
		      done();
		    });
	  });
  });
   describe('/GET ', () => {
 	it('it should GET all the Test', (done) => {
 		  chai.request(server)
 		  .get('/book')
 		  .end((err, res) => {
 				res.should.have.status(404);
 				// res.body.should.be.a('array');
 				// res.body.length.should.be.eql(0);
 			done();
 		  });
 	});
 });

});
  