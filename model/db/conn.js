// database connection in here 

//modules and helpers
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

module.exports = function(){
	// local connection string
	const url = 'mongodb://localhost/portfolio';

	mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

	mongoose.connection.once('open', function(){

		console.log('db connected');

	}).on('error', function(error){
		console.log('could not connect' , error);
	})	
}
