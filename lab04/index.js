var express = require('express')
var app = express()

app.get('/', function (req, res){
	res.send('Hola mundo! en Express :3')
})

app.post('/', function (req, res){
	res.send('Llamada POST misma url')
})

app.put('/user', function (req, res) {
	res.send('Recibimos un PUT en /user')
})

app.delete('/user', function(req, res){
	res.send('Recibimos un DELETE en /user')
})

app.use('/static', express.static('public'))

app.use(function (req, res, next){
	res.status(404).send("Eso no existe!")
})

app.use(function (err, req, res, next){
	console.error(err.stack)
	res.status(500).send('Ocurrio un  error! Pero no fue tu culpa :v')
})

app.listen(8080,function (){
	console.log('Aplicacion de ejemplo escuchando en el puerto 8080!')
})