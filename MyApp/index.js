var express = require('express');
var router = express.Router();

/**
 * @swagger
 *  /:
 *   get:
 *     tags:
 *       - MyApp
 *     summary: Get Request of API
 *     description: Shows the requested API
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', function(req, res, next) {
  res.send({ "Message": 'hello world' });
});

module.exports = router;
