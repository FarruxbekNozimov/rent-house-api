const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Register user
router.post("/register", async (req, res) => {
	try {
		const { first_name, last_name, phone, email, password } = req.body;

		// Check if the username is already taken
		const existingUser = await User.findOne({ phone });
		if (existingUser) {
			return res.status(400).json({ message: "This user is already exists" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create the user in the database
		const user = await User.create({
			first_name,
			last_name,
			email,
			phone,
			password: hashedPassword,
		});

		const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
			expiresIn: process.env.JWT_TIME,
		});

		res.status(201).json({ message: "User registered successfully", token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
});

// Login user
router.post("/login", async (req, res) => {
	try {
		const { phone, password } = req.body;

		// Find the user by username
		const user = await User.findOne({ phone });

		// If user not found or password doesn't match, return an error response
		if (!user || !(await bcrypt.compare(password, user.password))) {
			return res.status(401).json({ error: "Invalid login or password" });
		}

		// Generate a JWT token
		const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
			expiresIn: process.env.JWT_TIME,
		});

		// Return the token in the response
		res.json({ message: "Login successful", token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
});

module.exports = router;
