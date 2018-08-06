//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let mocha = require('mocha');
let chaiHttp = require('chai-http');
let server = require('../../../app');
let should = chai.should();


chai.use(chaiHttp);

//Our parent block
describe('Test', () => {
    /*
     * Test the /POST route
     */
    describe('/POST ', () => {
        it('it should GET all the Test', (done) => {
            chai.request(server)
                .post('/v1/employee/')
                .send({
                    "emp_id": "EMP_123",
                    "emp_city": "New York",
                    "emp_name": "John"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    // res.body.should.be.a('array');
                    // res.body.length.should.be.eql(0);
                    done();
                });
        });
    });


});
