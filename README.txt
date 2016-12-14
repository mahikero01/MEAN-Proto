1) Install yo using npm (if not installed)
    $ npm install -g yo

2) Install generator-meanjs (if not installed)
    $ npm install generator-meanjs

3) Generate MEAN stack template
    $ yo meanjs

4) Choose version
    $ 0.4.0

5) Or you cando it from scratch
    $ npm init

6) install express
    $ npm install express --save-exact

7) install angular
    $ npm install angular

8) install nodemon for dev purpose
    $ npm install -g nodemon (to use type "nodemon src/app")

9) install webpack for bundling
    $ npm install -g webpack

10) install iron-node for node debugging
    $ npm install -g iron-node


Setting up and Express Application
1) import the module
    var express = require('express');

2) Create instance 
    var app = express();

3) Configure URL to use "static" method to server static pages
    syntax: app.use('URLNamespace', functionToRun);

    app.use('/', express.static('public'));

4) Configure the application to listen on a selected port
    syntax : app.listen(portNumber, function(){
        callback function
    });

    app.listen(3000, function() {
        console.log('connected');
    });


    src/app.js -> point of entry


Setting Express API

1) import the module
    var express = require('express');

2) Create instance 
    var app = express();

3) use the "get" method
    syntax: app.get('nameOfURL', function(request, respond){ 
        this is the callback function for request and respond
    });

    // this will print on broser "These are the todos!" if the url is http://localhost:3000/api/todos
    // you can also use JSON data as return value
    app.get('/api/todos', function(req, res){
        res.send('These are the todos!');

        // JSON data
        res.json({todos: []});
    });


Using the Express router for  URL namespace

1) import the module
    var express = require('express');

2) Create instance 
    var app = express();

3) Create router instance
    var router = express.Router();

4) Mount the get method to the router
    router.get('/todos', function(req, res){
        res.send('These are the todos!');

        // JSON data
        res.json({todos: []});
    });

5) Use the "use" method of express
    syntax: app.use('nameSpaceToUse', functionToRun);

    app.use('/api', router);



Setting up Mongo DB

1) Include mongoose
    var mongoose = require('mongoose');

2) Create connection
    syntax: mongoose.connect('mongodb://hostName/databaseName' function() {
        call back function
    });

    mongoose.connect('mongodb://localhost/mean-todo', function(err){
        if(err) {
            console.log('Failed connecting to Mongodb!');
        } else {
            console.log('Succesfully connected to Mongo!');
        };
    });


Setting a Schema for Mongo DB
1) Include mongoose
    var mongoose = require('mongoose');

2) Create Schema
    syntax: mongoose.Schema({
        propertyName: propertyType,
        propertyName: propertyType,
    });


    var todoSchema = new mongoose.Schema({
        name: String,
        completed: Boolean
    });

3) Create the model
    syntax = mongoose.model('ModelName', schemaName);

    var model = mongoose.model('Todo', schema);