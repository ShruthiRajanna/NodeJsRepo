const cassandra = require('cassandra-driver');


let authProvider = new cassandra.auth.PlainTextAuthProvider
    (global.config.CREDENTIALS.CASSANDRA.USERNAME,
    global.config.CREDENTIALS.CASSANDRA.PASSWORD);

const client = new cassandra.Client(
    {
        contactPoints: global.config.VARIABLES.CASSANDRA.CONTACT_POINTS,
        authProvider: authProvider,
        keyspace: global.config.CONSTANTS.CASSANDRA.KEYSPACE
    }
);

module.exports = client;
