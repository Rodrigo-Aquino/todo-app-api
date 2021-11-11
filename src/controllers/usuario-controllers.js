module.exports = (app) => {
     app.get('/usuario', function (req, res) {
        res.send('Rastreamento da aplicação sendo feita com nodemon')
      })

      app.post('/usuario', function (req, res) {
        res.send('Rota post de usuario ativada: usuario adicionado ao banco de dados')
      })
}
//rodar com npm run dev