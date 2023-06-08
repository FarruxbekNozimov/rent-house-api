const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB Atlas connected");
	} catch (error) {
		console.error("MongoDB Atlas connection failed", error);
		process.exit(1); // Exit process with failure
	}
};

module.exports = connectDB;
