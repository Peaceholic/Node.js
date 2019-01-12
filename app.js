// Load pacakges
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// Define model
var Book = require('./models/book')

// Configure app to use bodyparser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Configure server port
var port = process.env.PORT || 8080

// Configure router
var router = require('./routes')(app, Book)

var server = app.listen(port, function() {
	console.log("Express server has started on port " + port)
})

// Configure mongoose

// Connect to mongodb server
var db = mongoose.connection
db.on('error', console.error)
db.once('open', function() {
	//Connected to DB server
	console.log("Connected to mongodb server")
})

mongoose.connect('mongodb://localhost/mongodb_tutorial')
