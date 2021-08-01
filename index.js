
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8089
const http = require('http');

app.get('/', (req, res) => res.send('Hello World'))
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})

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

module.exports = app
console.log('Hello World')