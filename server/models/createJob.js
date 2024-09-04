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

