
const http = require('http');

var cron = require('node-cron');
cron.schedule('*/5 * * * *', function(){
   console.log('running a task every two minutes');

   http.get('https://www.xn--888-4nlyax.com/lotto-admin/action/yeekee_runtime_setup.php', (res) => {
    let rawHtml = '';
    res.on('data', (chunk) => { rawHtml += chunk; });
    res.on('end', () => {
        try {
            console.log(rawHtml);
        } catch (e) {
            console.error(e.message);
        }
    });
});

   http.get('https://www.xn--888-4nlyax.com/lotto-admin/action/yeekee_runtime.php', (res) => {
    let rawHtml = '';
    res.on('data', (chunk) => { rawHtml += chunk; });
    res.on('end', () => {
        try {
            console.log(rawHtml);
        } catch (e) {
            console.error(e.message);
        }
    });
});

});

console.log('Hello World')