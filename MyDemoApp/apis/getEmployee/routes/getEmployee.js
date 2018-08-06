let express = require('express');
let router = express.Router();

let getEmployeeController = require('../controllers/getEmployeeController');


 console.log("Inside get Employee routes--------------------------->");


 /**
   * @swagger
   * /v1/employee/{empId}:
   *   get:
   *     description: Creates a employee
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: empId
   *         description: User object
   *         in:  path
   *         required: true
   *     responses:
   *       200:
   *         description: users
   */
router.get('/:empId', getEmployeeController);

module.exports = router;