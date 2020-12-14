const mongoose = require('mongoose');

//Creating MongoDB Connection
mongoose
	.connect('mongodb+srv://dilkash7:dilkash123@cluster0.nqnql.mongodb.net/Contact?retryWrites=true&w=majority', {
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

