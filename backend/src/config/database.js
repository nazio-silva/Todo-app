//referencia pra o mongoose fazer mapeamento dos objetos e conexao bd
const mongoose = require('mongoose') 
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')