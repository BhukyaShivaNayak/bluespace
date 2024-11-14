
import React, { useState, useEffect } from 'react';


import { useParams } from 'react-router-dom';
import Spiner from '../../Components/Spiner';
import { getsingleJobfunc } from '../../Services/Apis';

import "./index.css";


import DOMPurify from 'dompurify';
const moment = require('moment');









const Profile = () => {
    const [jobProfile, setJobProfile] = useState({});
    const [showspin, setShowSpin] = useState(true);
    const { id } = useParams();



    useEffect(() => {

        const jobProfileGet = async () => {
            try {
                const response = await getsingleJobfunc(id);


                if (response.status === 200) {
                    setJobProfile(response.data);
                } else {
                    console.error("Job not found or server error");
                }
            } catch (error) {
                console.error("Error fetching job profile:", error);
            }
        };


        jobProfileGet();


        setTimeout(() => {
            setShowSpin(false);
        }, 1200);
    }, [id]);



    return (
        < div className='job-container'>
            {showspin ? <Spiner /> :



                <div className='view-job'>
                    <div className='job-info'>
                        {/* <p>{jobProfile.Jname}</p> */}
                        {/* <p>{jobProfile.Lname}</p> */}
                        <p className='job-item'>Job Title : {jobProfile.JobName}</p>
                        <p className='job-item'>Compensation : {jobProfile.Cname}</p>
                        <p className='job-item'>Job ID : {jobProfile.JobID}</p>
                        {/* <p>{jobProfile.Rname}</p> */}
                        {/* <p>{jobProfile.Hname}</p> */}
                        <p className='job-item'>{jobProfile.Role}</p>
                        <p className='job-item'>Client Name : {jobProfile.Client}</p>
                        <p className='job-item'>Project Name : {jobProfile.ProjectName}</p>
                        <p className='job-item'>Recruiter : {jobProfile.DraftedBy}</p>
                        {/* <p>{jobProfile.Note}</p> */}
                        <p className='job-item'>Industry : {jobProfile.Industry}</p>




                        {/* <p>{jobProfile.JobID}</p> */}

                        <p className='job-item'>Opening Date : {moment(jobProfile.OpeningDate).format("DD-MM-YYYY")}</p>
                        <p className='job-item'>ExpiryDate : {moment(jobProfile.ExpiryDate).format("DD-MM-YYYY")}</p>
                        <p className='job-item'>Total Openings : {jobProfile.TotalOpenings}</p>
                        <p className='job-item'>Experience : {jobProfile.Experience}</p>
                        <p className='job-item'>Workplace Type : {jobProfile.WorkplaceType}</p>
                        {/* <p>{jobProfile.EmploymentType}</p> */}
                        <p className='job-item'>Seniority Level : {jobProfile.SeniorityLevelType}</p>
                        <p className='job-item'>Hiring Manager : {jobProfile.HiringManager}</p>
                        <p className='job-item'>Job Post : {jobProfile.JobPostType}</p>
                        <p className='job-item'>Job Role : {jobProfile.JobTitle}</p>
                        <p className='job-item'>Job Type : {jobProfile.JobType}</p>
                        <p className='job-item'>Status : {jobProfile.StatusType}</p>
                        <p className='job-item'>Priority : {jobProfile.Priority}</p>
                        <p className='job-item'>Location : {jobProfile.Location}</p>
                        <p className='job-item'>Department : {jobProfile.Department}</p>
                        <p className='job-item'>Skills Must Have : {jobProfile.SkillsMustHave}</p>
                        <p className='job-item'>Salary Type : {jobProfile.SalaryType}</p>
                    </div>
                    <div className='job-description'>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(jobProfile.JobDes) }} />
                    </div></div>

            }
        </div>
    );
};

export default Profile;