const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               ads:
 *                 type: boolean
 *               order:
 *                 type: array
 *                 items:
 *                   type: string
 *               notification:
 *                 type: boolean
 *               token:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               first_name: John
 *               last_name: Doe
 *               email: john@example.com
 *               phone: 1234567890
 *               ads: true
 *               order: ["order1", "order2"]
 *               notification: true
 *               token: token123
 *               username: johndoe
 *               password: password123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Username already exists
 *       500:
 *         description: Server Error
 */
// Register user
router.post("/register", async (req, res) => {
	try {
		const {
			first_name,
			last_name,
			email,
			phone,
			ads,
			order,
			notification,
			token,
			username,
			password,
		} = req.body;

		// Check if the username is already taken
		const existingUser = await User.findOne({ phone });
		if (existingUser) {
			return res.status(400).json({ message: "This user is already exists" });
		}

		// Create a new user
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			first_name,
			last_name,
			email,
			phone,
			ads,
			order,
			notification,
			token,
			username,
			password: hashedPassword,
		});
		await newUser.save();

		res.status(201).json({ message: "User registered successfully" });
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
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Compare the provided password with the stored hashed password
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Invalid password" });
		}

		res.json({ message: "Login successful" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
});

module.exports = router;
