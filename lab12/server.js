// importamos los paquetes necesarios
const express		= require('express');
const app			= express();
const bodyParser	= require('body-parser');

// configuramos nuestra app para usar bodyParser()
// el cual nos permitira obtener data enviada por POST

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use("/", function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
});

app.options("/*", function(req, res, next){
	res.sendStatus(200);
});

//RUTAS PARA NUESTRA API

const router = express.Router();



router.get('/', function(req, res) {
	res.json({ message: 'genial! bienvenido a nuestra api!' });
});

const userRouter = require('./routes/user');
router.use('/user', userRouter)

//Registrar las rutas
app.use('/api', router);


//Conexion a la bd
const mongoose		= require('mongoose');
mongoose.connect('mongodb://localhost:27017/dawa_blog');
mongoose.Promise	= global.Promise;

//Iniciar el servidor
app.listen(port);
console.log('La magia sucede en el puerto ' + port);