const express = require("express");
const mongoose = require("mongoose");
const PORT = 3002;
const connectMongoDB = require("./db/connection");
const productSchema = require("./schema/productSchema");
const Products = mongoose.model("Products", productSchema);

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
	res.send("Welcome to the Mongo Database");
});

app.post("/products", function (req, res) {
	try {
		const { title, price, description } = req.body;
		console.log(title, description);
		res.status(201).send({ title, price, description });
	} catch (error) {}
});

app.listen(PORT, async () => {
	await connectMongoDB();
	console.log(`Server running at http://localhost:${PORT}`);
});
