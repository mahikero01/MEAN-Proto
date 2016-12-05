'use strict';

var express = require('express');
var router = require('./api');

debugger;

var app = express();

require('./database');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3000, function(){
    console.log("The serving is running on port 3000");
});