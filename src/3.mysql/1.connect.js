const mysql = require("mysql")

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "zfcrawl",
    port: 33061
});

// connection.query(`INSERT INTO student(id,name) values(2,'zfpx2')`,function(error, result, fields) {
//     console.log(error);
//     console.log(result);
//     // console.log(fields); 行列信息
// })

// connection.query(`UPDATE student SET name='zfpx22' WHERE id=2 `, function (error, result, fields) {
//     console.log(error);
//     console.log(result);
//     // console.log(fields); 行列信息
// })
