const express = require("express");
const PORT = 3002;
const connectMongoDB = require("./db/connection");
const app = express();

app.listen(PORT, async () => {
	await connectMongoDB();
	console.log(`Server running at http://localhost:${PORT}`);
});
