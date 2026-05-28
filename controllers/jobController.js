const Job = require("../models/Job");


// CREATE JOB
const createJob = async (req, res) => {

    try {

        const {
            company,
            role,
            status,
            jobUrl,
            notes
        } = req.body;

        const job = await Job.create({

            company,
            role,
            status,
            jobUrl,
            notes,

            user: req.user._id

        });

        res.status(201).json(job);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

//Get Job
const getJobs = async (req, res) => {

    try {

        const query = {

            user: req.user._id

        };


        // FILTER BY STATUS
        if (req.query.status) {

            query.status = req.query.status;

        }


        // SEARCH COMPANY
        if (req.query.company) {

            query.company = {

                $regex: req.query.company,
                $options: "i"

            };

        }


        let jobsQuery = Job.find(query);


        // SORT BY DATE
        if (req.query.sort === "date") {

            jobsQuery = jobsQuery.sort({
                appliedDate: -1
            });

        }


        const jobs = await jobsQuery;

        res.json(jobs);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

//Get single Job
const getSingleJob = async (req, res) => {

    try {

        const job = await Job.findOne({

            _id: req.params.id,
            user: req.user._id

        });

        if (!job) {

            return res.status(404).json({
                message: "Job not found"
            });

        }

        res.json(job);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// UPDATE JOB
const updateJob = async (req, res) => {

    try {

        const job = await Job.findOne({

            _id: req.params.id,
            user: req.user._id

        });

        if (!job) {

            return res.status(404).json({
                message: "Job not found"
            });

        }

        const updatedJob = await Job.findOneAndUpdate(

    {
        _id:req.params.id,
        user:req.user._id
    },

    req.body,

    {
        new:true
    }

);

        res.json(updatedJob);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// DELETE JOB
const deleteJob = async (req, res) => {

    try {

        const job = await Job.findOne({

            _id: req.params.id,
            user: req.user._id

        });

        if (!job) {

            return res.status(404).json({
                message: "Job not found"
            });

        }

        await job.deleteOne();

        res.json({
            message: "Job deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {
    createJob,
    getJobs,
    getSingleJob,
    updateJob,
    deleteJob,
    updateJob
};
