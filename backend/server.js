/**
 *  simple server for CORS test.
 **/
var express = require('express')
var cors 	= require('cors')

var app 	= express()

app.get('/simple-s', cors(), function(req, res, next) {
	res.json({msg: 'This is CORS-allowed.'})
})

app.get('/simple-f', function(req, res, next) {
	res.json({msg: 'This is CORS-disallowed.'})
})

app.options('/pre-s', cors()) // enable preflight request for this request
app.post('/pre-s', cors(), function(req, res, next) {
	res.json({msg: 'This post request is CORS-allowed.'})
})

app.post('/pre-f', function(req, res, next) {
	res.json({msg: 'This post request is CORS-disallowed.'})
})

app.listen(8080, function() {
	console.log('CORS-enabled web server listening on port 8080')
})