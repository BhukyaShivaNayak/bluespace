const createJob = require('../models/createJob');
const moment = require('moment');

exports.createJob = async (req, res) => {
    const { Jname, Lname, Cname, Rname, Hname } = req.body;

    if (!Jname || !Lname || !Cname || !Rname || !Hname) {
        return res.status(400).json({ error: "All inputs are required" });
    }

    try {
        const existingJob = await createJob.findOne({ Jname });

        if (existingJob) {
            return res.status(400).json({ error: "This Job already exists in our database" });
        }

        const dateCreated = moment().format("YYYY-MM-DD HH:mm:ss");

        const jobData = new createJob({
            Jname,
            Lname,
            Cname,
            Rname,
            Hname,
            dateCreated
        });

        await jobData.save();
        res.status(201).json(jobData);
    } catch (error) {
        console.error("Error creating job:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getJob = async (req, res) => {
    try {
        const jobdata = await createJob.find();
        res.status(200).json(jobdata);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.useredit = async (req, res) => {
    const { id } = req.params;
    const { Jname,
        Lname,
        Cname,
        Rname,
        Hname,
        dateCreated } = req.body;
    

    const dateUpdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

    try {
        const updateuser = await users.findByIdAndUpdate({ _id: id }, {
            Jname,
            Lname,
            Cname,
            Rname,
            Hname,
            dateCreated
        }, {
            new: true
        });

        await updateuser.save();
        res.status(200).json(updateuser);
    } catch (error) {
        res.status(401).json(error)
    }
}
