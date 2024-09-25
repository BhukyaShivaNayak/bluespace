
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    Jname: {
        type: String,
        required: true,
        trim: true
    },
    Lname: {
        type: String,
        required: true,
        trim: true
    },
    Cname: {
        type: String,
        required: true,
        trim: true
    },
    Rname: {
        type: String,
        required: true,
        trim: true
    },
    Hname: {
        type: String,
        required: true,
        trim: true
    },

    Role: {
        type: String,
        required: true,
        trim: true
    },
    Client: {
        type: String,
        required: true,
        trim: true
    },
    Salary: {
        type: String,
        required: true,
        trim: true
    },
    DraftedBy: {
        type: String,
        required: true,
        trim: true
    },
    Notes: {
        type: String,
        required: true,
        trim: true
    },


    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
}, {
    version_key: false
});

const createJob = mongoose.model('createJob', jobSchema);

module.exports = createJob;
