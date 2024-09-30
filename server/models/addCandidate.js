const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    Candidatename: {
        type: String,
        required: true,
        trim: true
    },
    Contact: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        trim: true
    },
    Resume: {
        type: String,
        required: true,
        trim: true
    },

    RecruiterFeedback: {
        type: String,
        required: true,
        trim: true
    },

    Interview: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },

    JoiningDate: {
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

const candidate = mongoose.model('candidate', candidateSchema);

module.exports = candidate;

