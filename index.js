
const https = require('https');

var cron = require('node-cron');
cron.schedule('*/1 * * * *', function(){
   console.log('running a task every two minutes');

   https.get('https://www.xn--888-4nlyax.com/lotto-admin/action/yeekee_runtime_setup.php', (res) => {
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

    https.get('https://www.xn--888-4nlyax.com/lotto-admin/action/yeekee_runtime.php', (res) => {
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