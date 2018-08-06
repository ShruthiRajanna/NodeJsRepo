let Ajv = require('ajv');
let ajv = new Ajv({ allErrors: true });
let schema = require('../resources/schema.json');
let getEmployeeService = require('../services/getEmployeeService');

module.exports = (req,res, next) => {
    console.log("Inside controlerr---------------------->>>")
    let data = req.params;
    let valid = ajv.validate(schema, data);
    console.log("Validity---------------------->>>",valid);
    if (!valid) {
        console.log("errors------>",ajv.errors);
        res.send(ajv.errors)

    } else {
        getEmployeeService.getEmployee(data.empId, (err, data) => {
            if (err) {
                console.log("Error from cassandra-------->",err);
               res.send(err);
            } else {
                console.log("data from cassandra-------->",data);
                res.send(data);
            }
        });
    }
}