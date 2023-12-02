const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	title: String,
	price: Number,
	description: String,
	createdAt: { type: Date, default: Date.now() },
});

module.exports = productSchema;
