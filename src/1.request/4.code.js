var request = require('request');
var iconv = require('iconv-lite');
let cheerio = require('cheerio');
// a.html
request({
    url: 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1'
    , encoding: null
}, function (err, response, body) {
    if (err)
        console.error(err);
    body = iconv.decode(body, 'gbk').toString();
        console.log(body, "body");
    let $ = cheerio.load(body);
    let movies = [];
    $('.keyword .list-title').each((index, item) => {
        let movie = $(item);
        movies.push({
            name: movie.text()
        });
    });
    console.log(movies);
})