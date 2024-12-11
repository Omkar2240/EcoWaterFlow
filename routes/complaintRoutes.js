const express = require('express');
const app = express();
const Complaint = require('../models/complaintModel');
const router = express.Router();

// Create a new complaint
router.post('/', async (req, res) => {
    try {
        const { complaint, user } = req.body;
        complaint = new Complaint({ state,city,pincode,complaint, user });
        await complaint.save();
        res.status(201).json({ id: complaint._id, message: "Complaint registered successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a complaint by ID
router.get('/:id', async (req, res) => {
    try {
        const complaint = await Complaint.findById(req.params.id);
        if (!complaint) return res.status(404).json({ message: "Complaint not found" });
        res.json(complaint);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// List all complaints
router.get('/', async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.json(complaints);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update complaint status
router.patch('/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const complaint = await Complaint.findById(req.params.id);
        if (!complaint) return res.status(404).json({ message: "Complaint not found" });

        complaint.status = status;
        await complaint.save();
        res.json({ message: "Complaint status updated successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
