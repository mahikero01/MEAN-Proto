'use strict';

debugger;

//use the express module
var express = require('express');
var parser = require('body-parser');
var router = require('./api');



//create an instance of express
var app = express();

require('./database');
require('./seed');


//at the root URL serve content of the public folder (the index.html will be run here)
app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);


//this will create the listening port webapplication
app.listen(3000, function(){
    console.log("The serving is running on port 3000");
});