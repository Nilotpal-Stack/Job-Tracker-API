const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

    company: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: [
            "applied",
            "interview",
            "offer",
            "rejected",
            "withdrawn"
        ],
        default: "applied"
    },

    appliedDate: {
        type: Date,
        default: Date.now
    },

    jobUrl: String,

    notes: String,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

});

module.exports = mongoose.model("Job", jobSchema);