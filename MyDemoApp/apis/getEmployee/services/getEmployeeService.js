let queryUtil = require('../utils/queryUtil');
module.exports = {
    getEmployee: (data, callback) => {
        console.log("inside service------------------>")
        global.cassandraClient.execute(queryUtil.SELECT_QUERIES.SELECT_EMP_QUERY, [data], { prepare: true }, (err, result) => {
            console.log("result------------------->", result)
            if (err) {
                callback(err, null);
            } else {
                callback(null, result.rows[0]);
            }
        })
    }
}
