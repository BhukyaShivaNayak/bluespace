const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    // Jname: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // Lname: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
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
    // Hname: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // Role: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    Client: {
        type: String,
        required: true,
        trim: true
    },
    // Salary: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    DraftedBy: {
        type: String,
        required: true,
        trim: true
    },
    // Note: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    Industry: {
        type: String,
        required: true,
        trim: true
    },
    ProjectName:{
        type: String,
        required: true,
        trim: true
    },


    JobDes: {
        type: String,
        required: true,
        trim: true
    },
    JobID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    JobName: {
        type: String,
        required: true,
        trim: true
    },
    OpeningDate: {
        type: Date,
        required: true
    },
    ExpiryDate: {
        type: Date,
        required: true
    },
    TotalOpenings: {
        type: String,
        required: true,
        trim: true
    },
    Experience: {
        type: String,
        required: true,
        trim: true
    },
    WorkplaceType: {
        type: String,
        required: true,
        trim: true
    },
    // EmploymentType: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    SeniorityLevelType: {
        type: String,
        required: true,
        trim: true
    },
    HiringManager: {
        type: String,
        required: true,
        trim: true
    },
    JobPostType: {
        type: String,
        required: true,
        trim: true
    },
    JobTitle: {
        type: String,
        required: true,
        trim: true
    },
    JobType: {
        type: String,
        required: true,
        trim: true
    },
    StatusType: {
        type: String,
        required: true,
        trim: true
    },
    Priority: {
        type: String,
        required: true,
        trim: true
    },
    Location: {
        type: String,
        required: true,
        trim: true
    },
    Department: {
        type: String,
        required: true,
        trim: true
    },
    SalaryType: {
        type: String,
        required: true,
        trim: true
    },
    SkillsMustHave: {
        type: [String], 
        required:true, 
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
    versionKey: false
});


jobSchema.statics.generateJobID = async function () {
    const lastJob = await this.findOne({}, {}, { sort: { JobID: -1 } });
    const nextID = lastJob ? parseInt(lastJob.JobID) + 1 : 1;
    return String(nextID).padStart(3, '0');
};

jobSchema.pre('save', async function (next) {
    if (this.isNew) {
        this.JobID = await this.constructor.generateJobID();
    }
    next();
});

const createJob = mongoose.model('createJob', jobSchema);

module.exports = createJob;