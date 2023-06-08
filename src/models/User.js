const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	password: { type: String, required: true },
	ads: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ad", default: [] }],
	order: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order", default: [] }],
	notification: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
