const express = require("express");
const router = express.Router();
const Rent = require("../models/Rent");

// Create a rent
router.post("/rent", async (req, res) => {
	try {
		const rent = await Rent.create(req.body);
		res.status(201).json(rent);
	} catch (error) {
		res.status(500).json({ error: "An error occurred" });
	}
});

// Get all rent
router.get("/rent", async (req, res) => {
	try {
		const rent = await Rent.find();
		res.json(rent);
	} catch (error) {
		res.status(500).json({ error: "An error occurred" });
	}
});

// Get a single rent
router.get("/rent/:id", async (req, res) => {
	try {
		const rent = await Rent.findById(req.params.id);
		if (!rent) {
			return res.status(404).json({ error: "Rent not found" });
		}
		res.json(rent);
	} catch (error) {
		res.status(500).json({ error: "An error occurred" });
	}
});

// Update a rent
router.put("/rent/:id", async (req, res) => {
	try {
		const rent = await Rent.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!rent) {
			return res.status(404).json({ error: "Rent not found" });
		}
		res.json(rent);
	} catch (error) {
		res.status(500).json({ error: "An error occurred" });
	}
});

// Delete a rent
router.delete("/rent/:id", async (req, res) => {
	try {
		const rent = await Rent.findByIdAndRemove(req.params.id);
		if (!rent) {
			return res.status(404).json({ error: "Rent not found" });
		}
		res.json({ message: "Rent deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: "An error occurred" });
	}
});

module.exports = router;
