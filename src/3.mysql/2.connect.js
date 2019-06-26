const mysql = require("mysql")

function connect() {
    let connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "zfcrawl",
        port: 33061
    });

    connection.connect(err => {
        if (err) {
            console.log('连接失败', err);
            setTimeout(connect, 2000)
        }
        connection.on('error', function () {
            connect();
        })
    });
}
connect();



