module.exports = (app) => {
     app.get('/usuario', function (req, res) {
        res.send('Rastreamento da aplicação sendo feita com nodemon')
      })
}
//rodar com npm run dev