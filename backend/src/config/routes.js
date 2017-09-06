const express = require('express')//refrencia do express

module.exports = function(server) {
	//API Routes
	const router = express.Router()
	server.use('/api', router)//midlleware que a url comeca com /api

	//TODO Routes
	const todoService = require('../api/todo/todoService')
	todoService.register(router, '/todos')//O metodo register vai usar get post put delete
}