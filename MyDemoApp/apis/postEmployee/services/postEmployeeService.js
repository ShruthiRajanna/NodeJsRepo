let queryUtil = require('../utils/queryUtil');
module.exports = {
    postEmployee: (data, callback) => {
        global.cassandraClient.execute(queryUtil.INSERT_QUERIES.INSERT_EMP_QUERY, [JSON.stringify(data)], { prepare: true }, (err) => {
            callback(err, null);
        })
    }
}
