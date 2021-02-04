const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/static', express.static("static"));

app.use(express.json() );
app.use(express.urlencoded({extended:true})); 

app.get('/', function (req, res){
  res.render('index');
});

app.post('/result', function(req, res){
  const informacion = req.body;
  console.log(informacion);
  res.render('result', { 
    nombre: req.body.nombre, 
    ubicacion: req.body.ubicacion, 
    lenguaje: req.body.lenguaje, 
    comentario: req.body.comentario
  });
});

/* app.get('/result', function(req, res){
}); */

app.listen( port, () => console.log(`Listening on port: ${port}`) );