// 设置环境变量为 SET/export DEBUG=juejin:*
// 然后执行该脚本

let chalk = require('chalk');
let colors = ["black","red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"]
let colorIndex = 5;

module.exports = function(name){
    return function(...args) {
        let DEBUG = process.env.DEBUG;
        if (DEBUG.indexOf('*')!=-1){
            // * 匹配所有字符
            if (new RegExp(DEBUG.replace('*', '[\\S\\s]+')).test(name)){
                print(name)
            }

        }else{
            if (DEBUG==name) {
                print(name)
            } 
        }
        function print(name) {
            args.unshift(chalk[colors[colorIndex++]](" " + name));
            // colorIndex = colorIndex+1>=colors.length?0:colorIndex++;
            console.log.apply(null, args)
        }
    }
}

