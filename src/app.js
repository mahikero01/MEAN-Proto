'use strict';

//will use the express module
var express = require('express');
var router = require('./api');

debugger;

//create an instance of express
var app = express();

require('./database');

app.use('/', express.static('public'));

app.use('/api', router);


//this will create the listening port webapplication
app.listen(3000, function(){
    console.log("The serving is running on port 3000");
});