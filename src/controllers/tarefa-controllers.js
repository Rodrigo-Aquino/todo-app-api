module.exports = (app) => {
    app.get('/tarefa', function (req, res) {
        res.send('Rota ativada com get e recurso tarefa')
      })
      app.post('/tarefa', function (req, res) {
        res.send('Rota post de tarefa ativada: tarefa adicionado ao banco de dados')
      })
}
//rodar com npm run dev