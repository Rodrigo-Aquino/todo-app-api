const express = require('express')
const app = express()
 
app.get('/usuario', function (req, res) {
  res.send('Rota ativada com get e recurso usuario')
})
 
app.listen(3000)
