const mongoose = require('mongoose');

(async () => {
	try {
		const db = await mongoose.connect('mongodb://localhost/comisiones-troika');
		console.log('DB connected to', db.connection.name);
	} catch (error) {
		console.log(error);
	}
})();
