const mysql = require('mysql');
const Promise = require('bluebird');
const connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "root",
	port: 33061,
	database: "zfcrawl"
});

connection.connect();
module.exports = {

    query: Promise.promisify(connection.query).bind(connection)
}