import mongoose from "mongoose";

mongoose
	.connect("mongodb://localhost/testdb", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log("DB is connected"))
	.catch((err) => console.log(err));
