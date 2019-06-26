
var cronJob = require('cron').CronJob;
var job1 = new cronJob("* * * * * *", function () {
    console.log('每秒');
});
job1.start();



