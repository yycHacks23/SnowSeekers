const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');

app.use(express.static('C:/Users/user/Desktop/hackathon/SnowSeekers'))

app.get('/Home', function(req, res) {
    res.sendFile(path.join('C:/Users/user/Desktop/hackathon/SnowSeekers/pages/index.html'));
})

app.get('/Events', function(req, res) {
    res.sendFile(path.join('C:/Users/user/Desktop/hackathon/SnowSeekers/pages/events.html'));
})

app.get('/Business', function(req, res) {
    res.sendFile(path.join('C:/Users/user/Desktop/hackathon/SnowSeekers/pages/business.html'));
})






app.listen(port);