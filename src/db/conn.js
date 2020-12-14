const mongoose = require('mongoose');

//Creating MongoDB Connection
mongoose
	.connect('mongodb://localhost:27017/nodejsdynamic', {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connection Successfull');
	})
	.catch((error) => {
		console.log(error);
	});
