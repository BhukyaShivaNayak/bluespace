const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    Job_Title: String,
    Location: String,
    Compensation: String,
    Resume_in_Progress: String,
    Hiers_Required: String,
    Status: String
}, { timestamps: true });

const jobdb = new mongoose.model("jobs", jobSchema);

module.exports = jobdb;