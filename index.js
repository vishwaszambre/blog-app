const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connect to database: ', err);
    } else {
        console.log('Connected to database: ' + config.db);
    }
});

//app.use(express.static(__dirname+'/client/dist/'));

app.get('*', (req, res) => {
    res.send('<h1>hello world!</h1>');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});