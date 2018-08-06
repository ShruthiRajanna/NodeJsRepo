let express = require('express');
let router = express.Router();

let postEmployeeController = require('../controllers/postEmployeeController');

  /**
   * @swagger
   * /v1/employee:
   *   post:
   *     description: Creates a employee
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: Employee
   *         description: User object
   *         in:  body
   *         required: true
   *     responses:
   *       200:
   *         description: users
   */


router.post('/', postEmployeeController);

module.exports = router;
