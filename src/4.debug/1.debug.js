// 设置环境变量为 export/SET DEBUG=juejin:* 
// 然后执行该脚本
// const debug = require('debug');

const debug = require('./debug')
let loggerA = debug("juejin:a");
loggerA('a');

let loggerB = debug("juejin:b");
loggerB("b");

// 开发的时候输出，线上不输出日志
console.log('hello');

