var express = require('express')
var app = express()
var path = require('path')

app.get('/', function (req, res){
	res.sendFile('/',{root: path.join(__dirname,'landing_page')})
})


app.use(express.static('public'))
app.use(express.static('files'))
app.use(express.static('landing_page'))
app.use('/static', express.static('public'))

app.use(function (req, res, next){
	res.status(404).send("Eso no existe! :v")
})

app.use(function (err, req, res, next){
	console.error(err.stack)
	res.status(500).send("Algo salio mal! :v")
})

app.listen(8080, function(){
	console.log('Aplicacion de ejemlplo en el puerto 8080')
})