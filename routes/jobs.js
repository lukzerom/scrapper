const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {
    check,
    validationResult
} = require('express-validator');
const Job = require('../models/Job')



// @route GET api/jobs/job
// @desc Get job details
// @access Public

router.get('/jobs/:job',  async (req, res) => {


    try {
        const job = await Job.find({
            job: req.params.job
        })
        res.json(job)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
});


// @route POST api/job
// @desc Add contact
// @access Public

router.post('/jobs', async (req, res) => {
   
    const {
        name,
        days = [],
    } = req.body;

    try {
        const newJob = new Job({
            name,
            days
        })


        const job = await newJob.save();
        res.json(job)
    } catch (err) {

        console.error(err.message)
        res.status(500).send("Server error ")

    }

});

// @route PUT api/jobs/jobd
// @desc Update days in job
// @access Public

router.put('/jobs/:job',  async (req, res) => {

    const {
       day
    } = req.body;



    try {

        let job = await Job.findById(req.params.job)

        if (!job) {
            return res.status(404).json({
                msg: "Job not found"
            })
        }


        job = await Job.findByIdAndUpdate(req.params.job, {
            $set: contactFields
        }, {
            new: true
        });
        res.json(job)

    } catch (err) {

        console.error(err.message)
        res.status(500).send("Server error ")
    }
});





module.exports = router;