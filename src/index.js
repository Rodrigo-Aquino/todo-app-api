const usuarioExpress = require('./controllers/usuario-controllers.js')
const tarefaExpress = require('./controllers/tarefa-controllers.js')
const express = require('express')

const app = express()
usuarioExpress(app)
tarefaExpress(app)

 app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

//rodar com npm run dev