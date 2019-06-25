const request = require("request");
let options = {
    url: "http://localhost:8080/signup",
    method: "POST",
    json: true,
    headers:{
        "Content-Type": "application/json"
    },
    body:{name: 'zfpx', age: 9}
}
//用户注册功能
request(options, function(err, response, body){
    if(!err){
        console.log(body)
    }
})

//  req.write     res.write




