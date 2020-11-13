const express = require("express");
const app = express();
const bodyParser =  require("body-parser");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://seuusuário:suasenha@cluster0.k0shz.mongodb.net/cafeterias?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

let db = mongoose.connection;


db.on('error', console.log.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Conexão concluída com êxito!')
});

//rotas
const cafeterias = require("./routes/cafeteriasRoute");

//configurar body parser
app.use(bodyParser.json());
// app.use(express.json()); - Podemos usar a propria função de parser de json do express, sem a necessidade de instalar o body parser 

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

app.use("/cafeterias", cafeterias)

module.exports = app