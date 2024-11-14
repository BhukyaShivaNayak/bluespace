const createJob = require('../models/createJob');


const candidate = require('../models/addCandidate');

const moment = require('moment');





exports.createJob = async (req, res) => {
    const { Cname, DraftedBy, Industry, JobID, JobName, OpeningDate, ExpiryDate, TotalOpenings, Experience, HiringManager, JobPostType, JobTitle, JobType, StatusType, Priority, Location, Department, SalaryType, JobDes, Client, SeniorityLevelType, WorkplaceType, SkillsMustHave, DegreeType, miniSkill, CheckboxClick, CheckboxClick1, minimumYears, custmizationQuestion } = req.body;

    if (!Cname || !DraftedBy || !Industry || !JobID || !JobName || !OpeningDate || !ExpiryDate || !TotalOpenings || !Experience || !HiringManager || !JobPostType || !JobTitle || !JobType || !StatusType || !Priority || !Location || !Department || !Client || !SeniorityLevelType || !WorkplaceType || !SalaryType || !JobDes || !SkillsMustHave || !DegreeType || !miniSkill || !CheckboxClick || !CheckboxClick1 || !minimumYears || !custmizationQuestion) {
        return res.status(400).json({ error: "All inputs are required" });
    }

    try {
        const existingJob = await createJob.findOne({ JobID });

        if (existingJob) {
            return res.status(400).json({ error: "This Job already exists in our database" });
        }



        const jobInfoData = new createJob({
            Cname, DraftedBy, Industry, JobID, JobName, OpeningDate, ExpiryDate, TotalOpenings, Experience, HiringManager, JobPostType, JobTitle, JobType, StatusType, Priority, Location, Department, SalaryType, JobDes, Client, SeniorityLevelType, WorkplaceType, SkillsMustHave, DegreeType, miniSkill, CheckboxClick, CheckboxClick1, minimumYears, custmizationQuestion
        });

        await jobInfoData.save();
        res.status(201).json(jobInfoData);
    } catch (error) {
        console.error("Error creating job:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};




exports.getJob = async (req, res) => {
    try {
        const addJobData = await createJob.find();
        res.status(200).json(addJobData);
    } catch (error) {
        console.error("Error fetching Candidate:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};



exports.getsingleJob = async (req, res) => {
    const { id } = req.params;

    try {

        const singleJob = await createJob.findOne({ _id: id });


        if (!singleJob) {
            return res.status(404).json({ message: 'Job not found' });
        }


        res.status(200).json(singleJob);
    } catch (e) {

        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.jobedit = async (req, res) => {

    const { id } = req.params;
    const { Cname, DraftedBy, Industry, JobID, JobName, OpeningDate, ExpiryDate, TotalOpenings, Experience, HiringManager, JobPostType, JobTitle, JobType, StatusType, Priority, Location, Department, SalaryType, JobDes, SkillsMustHave } = req.body;


    const dateUpdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")

    try {
        const updatejob = await createJob.findByIdAndUpdated({ _id: id }, {
            Cname, DraftedBy, Industry, JobID, JobName, OpeningDate, ExpiryDate, TotalOpenings, Experience, HiringManager, JobPostType, JobTitle, JobType, StatusType, Priority, Location, Department, SalaryType, JobDes, dateUpdated, Client, SeniorityLevelType, WorkplaceType, SkillsMustHave
        }, {
            new: true
        });

        await updatejob.save();
        res.status(200).json(updatejob)
    } catch (error) {
        res.status(401).json(error)
    }

}


exports.jobdelete = async (req, res) => {

    const { id } = req.params;
    try {
        const deleteJob = await createJob.findByIdAndDelete({ _id: id });
        res.status(200).json(deleteJob)
    } catch (error) {
        res.status(401).json(error)
    }

}


exports.candidate = async (req, res) => {
    const { Candidatename, Contact, Email, Resume, RecruiterFeedback, Interview, status, JoiningDate } = req.body;

    if (!Candidatename || !Contact || !Email || !Resume || !RecruiterFeedback || !Interview || !status || !JoiningDate) {
        return res.status(400).json({ error: "All inputs are required" });
    }

    try {
        const existingJob = await candidate.findOne({ Email });

        if (existingJob) {
            return res.status(400).json({ error: "This Job already exists in our database" });
        }



        const candidateInfoData = new candidate({
            Candidatename, Contact, Email, Resume, RecruiterFeedback, Interview, status, JoiningDate
        });

        await candidateInfoData.save();
        res.status(201).json(candidateInfoData);
    } catch (error) {
        console.error("Error creating job:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};




exports.getcandidate = async (req, res) => {
    try {
        const addCandidateData = await candidate.find();
        res.status(200).json(addCandidateData);
    } catch (error) {
        console.error("Error fetching Candidate:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// exports.useredit = async (req, res) => {
//     const { id } = req.params;
//     const { Jname,
//         Lname,
//         Cname,
//         Rname,
//         Hname,
//         dateCreated } = req.body;


//     const dateUpdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

//     try {
//         const updateuser = await users.findByIdAndUpdate({ _id: id }, {
//             Jname,
//             Lname,
//             Cname,
//             Rname,
//             Hname,
//             dateCreated
//         }, {
//             new: true
//         });

//         await updateuser.save();
//         res.status(200).json(updateuser);
//     } catch (error) {
//         res.status(401).json(error)
//     }
// }