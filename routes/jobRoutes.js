const express = require("express");

const router = express.Router();

const {
    createJob,
    getJobs,
    getSingleJob,
    updateJob,
    deleteJob
} = require("../controllers/jobController");

const {
    protect
} = require("../middleware/authMiddleware");


// CREATE JOB
router.post("/", protect, createJob);


// GET ALL JOBS
router.get("/", protect, getJobs);

// GET SINGLE JOB
router.get("/:id", protect, getSingleJob);

// UPDATE JOB
router.patch("/:id", protect, updateJob);

// DELETE JOB
router.delete("/:id", protect, deleteJob);


module.exports = router;