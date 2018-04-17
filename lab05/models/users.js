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
		console.log(req);
		console.log(req.body);
		user_model.findOne({username: req.body.username, password: req.body.password},function(err,items){
				if(items != null) {
					console.log(items)
					console.log("first if")
					res.redirect('/producto');
				} else if (err) {
					console.log(err)
					res.send(items.count);
				}else {
					console.log("final else")
					console.log(items)					
					console.log("username: " + req.query.username + "")
					console.log("password: " + req.query.password + "")
					res.redirect('/login');
				}
			});			

	},
		
};

