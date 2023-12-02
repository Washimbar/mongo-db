const mongoose = require("mongoose");

const connectMongoDB = async () => {
	try {
		mongoose.connect("mongodb://localhost:27017/users");
		console.log("Database connected");
	} catch (error) {
		console.log("Database connection error");
		console.log(error.message);
	}
};

module.exports = connectMongoDB;
