const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    state:{ type: String, required: true},
    city: { type: String, required: true },
    pincode: {type: Integer, required: true},
    complaint: { type: String, required: true },
    status: { type: String, default: "Received" }, // Possible values: Received, In Progress, Resolved
    user: { type: String }, // Optional user email or identifier
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', complaintSchema);
