const request = require("request");
const fs = require("fs");
const path = require("path"); 

// 在html中 如果有文件上传的话 需要指定 encrytype="multipart-formdata"
// 这个对象就是要提交到服务器的对象
let formData = {
    name: 'zfpx',
    content: fs.createReadStream(path.resolve(__dirname, 'content.txt'))
}
request.post({
    url: "http://localhost:8080/upload",
    formData
})

/**
 * 客户端上传多次，文件名一样，也会生成新文件
 *  */ 


