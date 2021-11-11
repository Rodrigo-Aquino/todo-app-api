module.exports = (app) => {
    app.get('/tarefa', function (req, res) {
        res.send('Rota ativada com get e recurso tarefa')
      })
}
//rodar com npm run dev