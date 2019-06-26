const mysql = require("mysql");

let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "zfcrawl",
	port: 33061
});

connection.connect();
let username = '1';
let password = '1';
connection.query(`SELECT * FROM users WHERE username=${username} AND password=${password}`,(err, result) => {
    console.log(err);
    console.log(result);
})



