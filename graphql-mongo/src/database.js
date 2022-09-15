import mongoose from "mongoose";

export async function connect() {
	try {
		await mongoose.connect("mongodb://localhost:27017/mongodbgraphql", {
			useNewUrlParser: true,
		});
		console.log("database connected!!");
	} catch (error) {
		console.log("something went wrong", error);
	}
}
