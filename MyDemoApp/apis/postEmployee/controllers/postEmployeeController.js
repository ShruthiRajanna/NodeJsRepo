let Ajv = require('ajv');
let ajv = new Ajv({ allErrors: true });
let schema = require('../resources/schema.json');
let postEmployeeService = require('../services/postEmployeeService');

module.exports = (req, res, next) => {
    let data = req.body;
    let valid = ajv.validate(schema, data);
    if (!valid) {
        res.send(ajv.errors)
    } else {
        postEmployeeService.postEmployee(data, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send({ empid:data.emp_id,"message": "Employee Added Successfully" });
            }
        });
    }
}