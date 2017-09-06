const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()//instancia do express
const allowCors = require('./cors')

// Midlleware
server.use(bodyParser.urlencoded({ extended : true }))
server.use(bodyParser.json())
server.use(allowCors)


server.listen(port, function() {
	// Usando CRASE ` ` backtic
	console.log(`Backend está funcionando na porta ${port}.`)   
})

module.exports = server //Exportando o arq server