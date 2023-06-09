const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema({
	region_id: { type: mongoose.Schema.Types.ObjectId, required: true },
	district_id: { type: mongoose.Schema.Types.ObjectId, required: true },
	address: { type: String, required: true },
	location: { type: String, required: true },
	gas: { type: Boolean, default: false },
	light: { type: Boolean, default: false },
	water_cold: { type: Boolean, default: false },
	water_hot: { type: Boolean, default: false },
	conditioner: { type: Boolean, default: false },
	freezer: { type: Boolean, default: false },
	status: { type: String, enum: ["available", "rented"], default: "available" },
	price: { type: Number, required: true },
	square_meter: { type: Number, required: true },
	is_floor: { type: Boolean, default: false },
	home_floor: { type: Number, default: 1 },
	total_floor: { type: Number, default: 1 },
	rent_photo: { type: String },
	user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const Rent = mongoose.model("Rent", rentSchema);

module.exports = Rent;
