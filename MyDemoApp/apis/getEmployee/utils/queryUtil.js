module.exports = {
    "SELECT_QUERIES": {
        "SELECT_EMP_QUERY": `select * from ${global.config.CONSTANTS.CASSANDRA.EMPLOYEE_TABLE} where emp_id=?`
    }
}