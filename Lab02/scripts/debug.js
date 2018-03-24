var fs = require('fs');

fs.readFile('lorem.txt', 'utf8', function(err, data){

		debugger;

		if (err) 
			throw err;

		console.log(data);
});