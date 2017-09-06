const Todo = require('./todo')//Importando o arq todo.js

Todo.methods(['get', 'post', 'put', 'delete'])//Criando API Rest padrao
Todo.updateOptions({new: true, runValidators: true})//Retorna o registro atualizado

module.exports = Todo //exportando a variavel Todo