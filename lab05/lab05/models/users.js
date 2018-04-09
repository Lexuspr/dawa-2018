var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var login_schema = new Schema({
	username: String,
	password: String
	
});

user_model = mongoose.model('usuario', login_schema, 'usuario');
module.exports = {
	login: function(req,res){		
		prod_model.findOne({username: req.query.username, password: req.query.password},function(err,items){
				if(items.username) {
					console.log(items)
					res.redirect('/producto');
				}else{
					console.log(items)
					res.send(items.count);
				}
			});			

	},
		
};

