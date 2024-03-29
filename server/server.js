const express = require('express')
const  bodyParser = require ('body-parser') 
const mongoose = require('mongoose');
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.json({
    'mensaje' : 'Bienvenidos, estamos en la APP de NODE.JS + el MONGO.DB'
  })
})

app.get('/productos', function (req, res) {
  res.json({
    'data' : 'aqui van los productos'
  })
})

app.post('/producto', function (req, res) {
  let datos = req.body;

  if(datos.nombre == undefined || datos.marca == undefined || datos.color == undefined){
    res.status(400).json({
      "err" : "datos incompletos"
    });
  }else{
    res.json({
    'data' : req.body
  })
  }
  
})

app.get('/producto/:id', function (req, res) {
  res.json({
    'data' : `aqui recibi el ID para mostrar un producto. ID ${req.params.id}`
  })
})
 
mongoose.connect('mongodb://localhost:27017/tienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res) => {
  if(err)throw err;
  console.log("conectado a la DB");
});


app.listen(3000, () =>{
  console.log("servidor ONLINE");
});