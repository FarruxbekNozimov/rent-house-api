const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
		required: true,
	},
	ads: {
		type: Boolean,
		default: true,
	},
	order: {
		type: Array,
		default: [],
	},
	notification: {
		type: Boolean,
		default: true,
	},
	token: {
		type: String,
		default: null,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
