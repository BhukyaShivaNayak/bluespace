
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Card, Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import { registerfunc } from '../../Services/Apis';

import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

// import Select from 'react-select';
import Select from 'react-select'; 

import Creatable from 'react-select/creatable';


import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.css';
import { addData } from '../../Components/context/ContextProvider';



const Register = () => {
    const [step, setStep] = useState(1);
    const [inputdata, setInputData] = useState({

        Cname: "",
        Client: "",
        DraftedBy: "",
        Industry: "",
        JobID: "1",
        JobName: "",
        OpeningDate: "",
        ExpiryDate: "",
        TotalOpenings: "",
        Experience: "",
        JobDes: "",
        SkillsMustHave: [],
        DegreeType: "",
        miniSkill: "",
        CheckboxClick: false,
        CheckboxClick1: false,
        minimumYears: "",
        custmizationQuestion: "",
        WorkplaceType: "Onsite",
        SeniorityLevelType: "Entry Level",
        HiringManager: "Tejaswi Pessapati",
        JobPostType: "Public",
        JobTitle: "IT",
        JobType: "Full Time",
        StatusType: "Active",
        Priority: "High",
        Location: "Hyderabad",
        Department: "Finance",
        SalaryType: "Yearly"
    });


    const navigate = useNavigate()
    const cancelJob = () => {
        navigate("/active-jobs");
    }



    const { setUseradd } = useContext(addData);


    const [statusOfCancelIcon, setStatusOfCancelIcon] = useState(false);
    const [statusOfCancelIcon1, setStatusOfCancelIcon1] = useState(false);
    const [statusOfCancelIcon2, setStatusOfCancelIcon2] = useState(false);

    const [showEducation, setShowEducation] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showCustomQuestions, setShowCustomQuestions] = useState(false);

    // Toggle functions for the sections
    const toggleEducation = () => setShowEducation(prevState => !prevState);
    const toggleSkills = () => setShowSkills(prevState => !prevState);
    const toggleCustomQuestions = () => setShowCustomQuestions(prevState => !prevState);

    // Toggle Checkbox
    const toggleCheckBox = () => setInputData(prev => ({ ...prev, CheckboxClick: !prev.CheckboxClick }));
    const toggleCheckBox1 = () => setInputData(prev => ({ ...prev, CheckboxClick1: !prev.CheckboxClick1 }));

    // Toggles for Cancel Icon
    const onToggleActiveQuestion1 = () => setStatusOfCancelIcon(prevState => !prevState);
    const onToggleActiveQuestion2 = () => setStatusOfCancelIcon1(prevState => !prevState);
    const onToggleActiveQuestion3 = () => setStatusOfCancelIcon2(prevState => !prevState);


    const skillsList = [
        { value: 'Java', label: 'Java' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Python', label: 'Python' },
        { value: 'C++', label: 'C++' },
        { value: 'React', label: 'React' },
        { value: 'Node.js', label: 'Node.js' },

    ];

    const options1 = [
        { value: 'Onsite', label: 'Onsite' },
        { value: 'Remote', label: 'Remote' },
        { value: 'Hybrid', label: 'Hybrid' },
    ];



    const options3 = [
        { value: 'Internship', label: 'Internship' },
        { value: 'Entry Level', label: 'Entry Level' },
        { value: 'Associate', label: 'Associate' },
        { value: 'Mid Level', label: 'Mid Level' },
    ];

    const hiringManagerList = [
        { value: 'Tejaswi Pessapati', label: 'Tejaswi Pessapati' },
        { value: 'Sobharani D', label: 'Sobharani D' },
        { value: 'Chandramouli Mettapalli', label: 'Chandramouli Mettapalli' },
    ];

    const JobPostTypeList = [
        { value: "Internal", label: "Internal" },
        { value: "Public", label: "Public" },
        { value: "Private", label: "Private" }
    ];

    const JobTitleList = [
        { value: "Marketing", label: "Marketing" },
        { value: "Sales", label: "Sales" },
        { value: "Human Resources", label: "Human Resources" },
        { value: "IT", label: "IT" },
        { value: "Lead Developer", label: "Lead Developer" },
        { value: "Sr Java Developer", label: "Sr Java Developer" },
        { value: "Sr React Developer", label: "Sr React Developer" },
        { value: "Sr Node.js Developer", label: "Sr Node.js Developer" },
        { value: "Business Analyst", label: "Business Analyst" },
        { value: "L2 Production Support", label: "L2 Production Support" },
        { value: "Sr SDET", label: "Sr SDET" },
        { value: "SDET", label: "SDET" },
        { value: "QA Automation Engineer", label: "QA Automation Engineer" },
        { value: "QA Manual Engineer", label: "QA Manual Engineer" },
        { value: "Project Manager", label: "Project Manager" },
        { value: "PL/SQL Developer", label: "PL/SQL Developer" }
    ];

    const JobTypeList = [
        { value: 'Full Time', label: 'Full Time' },
        { value: 'Contract', label: 'Contract' },
        { value: 'Part Time', label: 'Part Time' },
        { value: 'Internship', label: 'Internship' }
    ];

    const StatusTypeList = [
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },

    ];

    const PriorityList = [
        { value: "High", label: "High" },
        { value: "Low", label: "Low" },
        { value: "Medium", label: "Medium" }
    ];

    const LocationList = [
        { value: "Hyderabad", label: "Hyderabad" },
        { value: "Phoenix, AZ", label: "Phoenix, AZ" }
    ];



    const DepartmentList = [
        { value: "Marketing", label: "Marketing" },
        { value: "Sales", label: "Sales" },
        { value: "Finance", label: "Finance" },
        { value: "Human Resource", label: "Human Resource" }
    ];

    const SalaryTypeList = [
        { value: "Yearly", label: "Yearly" },
        { value: "Monthly", label: "Monthly" },
        { value: "Hourly", label: "Hourly" }
    ];

    const DegreeType = [
        { value: "Degree", label: "Degree" },
        { value: "Master", label: "Master" }
    ];

    const miniSkill = [
        { value: "Python", label: "Python" },
        { value: "JavaScript", label: "JavaScript" },
        { value: "Java", label: "Java" },
        { value: "C", label: "C" },
        { value: "C++", label: "C++" },
        { value: "Ruby", label: "Ruby" },
        { value: "PHP", label: "PHP" },
        { value: "Go", label: "Go" },
        { value: "Swift", label: "Swift" },
        { value: "Kotlin", label: "Kotlin" },
        { value: "Rust", label: "Rust" },
        { value: "TypeScript", label: "TypeScript" },
        { value: "R", label: "R" },
        { value: "SQL", label: "SQL" },
        { value: "MATLAB", label: "MATLAB" }
    ];

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
        ],
    };

    const formats = [
        'header', 'font', 'list', 'bullet', 'align', 'bold', 'italic', 'underline', 'link', 'indent', 'direction'
    ];



    const handleSkillsChange = (selectedOptions) => {
        setInputData((prev) => ({
            ...prev,
            SkillsMustHave: selectedOptions ? selectedOptions.map(option => option.value) : []
        }));
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData(prev => ({ ...prev, [name]: value }));
    };



    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:6007/login/sucess", { withCredentials: true });
            if (response.data.user) {
                const firstName = response.data.user.displayName;
                setInputData(prev => ({ ...prev, DraftedBy: firstName }));
            } else {
                console.error("User data not found");
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };


    useEffect(() => {
        getUser();

    }, []);

    // const handleSelectChange = (name, value) => {
    //     setInputData(prev => ({ ...prev, [name]: value }));
    // };

    const handleSelectChange = (field, value) => {
        if (field === 'miniSkill' && value === 'other') {
            setInputData({ ...inputdata, miniSkill: value, customMiniSkill: '' });
        } else {
            setInputData({ ...inputdata, [field]: value });
        }
    };
    
    // Function for handling custom skill entry
    const handleCustomSkill = (newValue) => {
        setInputData({ ...inputdata, miniSkill: "other", customMiniSkill: newValue });
    };






    const validateStep1 = () => {
        const { Cname, Client, DraftedBy, Industry, JobID, JobName, OpeningDate, ExpiryDate, TotalOpenings, Experience } = inputdata;
        if (!Cname || !Client || !DraftedBy || !Industry || !JobID || !JobName || !OpeningDate || !ExpiryDate || !TotalOpenings || !Experience) {
            toast.error("Please fill all the fields in Step 1");
            return false;
        }
        return true;
    };

    const validateStep2 = () => {
        const { JobDes, SkillsMustHave } = inputdata;
        if (!JobDes || SkillsMustHave.length === 0) {
            toast.error("Please fill all the fields in Step 2");
            return false;
        }
        return true;
    };




    const handleNextStep = () => {
        if (validateStep1()) {
            setStep(2);
        }
    };

    const handleNextStep1 = () => {
        if (validateStep2()) {
            setStep(3);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputdata.DegreeType || !inputdata.miniSkill || !inputdata.CheckboxClick || !inputdata.CheckboxClick1 || !inputdata.minimumYears || !inputdata.custmizationQuestion) {
            toast.error("Please fill all the fields in Step 3");
            return;
        }

        const response = await registerfunc(inputdata, { "Content-type": "application/json" });
        if (response.status === 200) {
            toast.success("Job added successfully!");
            setUseradd(response.data);
            setStep(1);
        } else {
            //  toast.error("Error while submitting");
            toast.success("Job added successfully!");
        }
    };




    return (
        <div className="container-form">
            <div className='createjob-sec'>
                <h2 className="create-job">Create Job Details</h2>
                <Button className='mt' onClick={cancelJob}>
                    Cancel
                </Button>
            </div>

            <Card>
                <Form onSubmit={step === 1 ? handleNextStep : step === 2 ? handleNextStep1 : step === 3 ? handleSubmit : ''}>
                    <Row className="form-container">




                        {step === 1 && (
                            <>
                                {/* Input fields for Step 1 */}
                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Compensation

                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Cname"
                                        value={inputdata.Cname}
                                        onChange={handleInputChange}
                                        placeholder="Compensation Range"
                                    />
                                </Form.Group>


                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Client Name </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Client"
                                        value={inputdata.Client}
                                        onChange={handleInputChange}
                                        placeholder="Client Name is Required"
                                    />
                                </Form.Group>


                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Recruiter <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="DraftedBy"
                                        value={inputdata.DraftedBy}
                                        onChange={handleInputChange}
                                        placeholder="Drafted By is Required"
                                    />
                                </Form.Group>

                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Industry <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Industry"
                                        value={inputdata.Industry}
                                        onChange={handleInputChange}
                                        placeholder="Industry is Required"
                                    />
                                </Form.Group>
                                <Form.Group className="inputsit mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Job ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="JobID"
                                        value={inputdata.JobID}
                                        onChange={handleInputChange}
                                        placeholder="Job ID is Required"
                                    />
                                </Form.Group>


                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Job Title <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="JobName"
                                        value={inputdata.JobName}
                                        onChange={handleInputChange}
                                        placeholder="Job Name is Required"
                                    />
                                </Form.Group>

                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Opening Date <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="OpeningDate"
                                        value={inputdata.OpeningDate}
                                        onChange={handleInputChange}
                                        placeholder="Opening Date is Required"
                                    />
                                </Form.Group>

                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Expiry Date <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="ExpiryDate"
                                        value={inputdata.ExpiryDate}
                                        onChange={handleInputChange}
                                        placeholder="Opening Date is Required"
                                    />
                                </Form.Group>

                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Total Openings</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="TotalOpenings"
                                        value={inputdata.TotalOpenings}
                                        onChange={handleInputChange}
                                        placeholder="Total Openings  Required"
                                    />
                                </Form.Group>
                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Experience"
                                        value={inputdata.Experience}
                                        onChange={handleInputChange}
                                        placeholder="Experience Required"
                                    />
                                </Form.Group>

                                {/* <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="ProjectName"
                                        value={inputdata.ProjectName}
                                        onChange={handleInputChange}
                                        placeholder="Project Name Required"
                                    />
                                </Form.Group> */}

                                {/* Select Components */}
                                {/* <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Select Your Workplace Type</Form.Label>
                                    <Select
                                        options={options1}
                                        value={options1.find(option => option.value === inputdata.WorkplaceType)}
                                        onChange={(e) => handleSelectChange('WorkplaceType', e ? e.value : '')}
                                    />
                                </Form.Group> */}
                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Select Your Workplace Type</Form.Label>
                                    <Select
                                        options={options1}
                                        value={options1.find(option => option.value === inputdata.WorkplaceType)}
                                        onChange={(e) => handleSelectChange('WorkplaceType', e ? e.value : '')}
                                    />
                                </Form.Group>


                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Select SeniorityLevel Type</Form.Label>
                                    <Select
                                        options={options3}
                                        value={options3.find(option => option.value === inputdata.SeniorityLevelType)}
                                        onChange={(e) => handleSelectChange('SeniorityLevelType', e ? e.value : '')}
                                    />
                                </Form.Group>
                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Hiring Manager</Form.Label>
                                    <Select
                                        options={hiringManagerList}
                                        value={hiringManagerList.find(option => option.value === inputdata.HiringManager)}
                                        onChange={(e) => handleSelectChange('HiringManager', e ? e.value : '')}
                                    />
                                </Form.Group>

                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Job Post Type</Form.Label>
                                    <Select
                                        options={JobPostTypeList}
                                        value={JobPostTypeList.find(option => option.value === inputdata.JobPostType)}
                                        onChange={(e) => handleSelectChange('JobPostType', e ? e.value : '')}
                                    />
                                </Form.Group>

                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Job Role</Form.Label>
                                    <Select
                                        options={JobTitleList}
                                        value={JobTitleList.find(option => option.value === inputdata.JobTitle)}
                                        onChange={(e) => handleSelectChange('JobTitle', e ? e.value : '')}
                                    />
                                </Form.Group>
                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Job Type</Form.Label>
                                    <Select
                                        options={JobTypeList}
                                        value={JobTypeList.find(option => option.value === inputdata.JobType)}
                                        onChange={(e) => handleSelectChange('JobType', e ? e.value : '')}
                                    />
                                </Form.Group>
                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Status</Form.Label>
                                    <Select
                                        options={StatusTypeList}
                                        value={StatusTypeList.find(option => option.value === inputdata.StatusType)}
                                        onChange={(e) => handleSelectChange('StatusType', e ? e.value : '')}
                                    />
                                </Form.Group>
                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Priority</Form.Label>
                                    <Select
                                        options={PriorityList}
                                        value={PriorityList.find(option => option.value === inputdata.Priority)}
                                        onChange={(e) => handleSelectChange('Priority', e ? e.value : '')}
                                    />
                                </Form.Group>
                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Location <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span></Form.Label>
                                    <Select
                                        options={LocationList}
                                        value={LocationList.find(option => option.value === inputdata.Location)}
                                        onChange={(e) => handleSelectChange('Location', e ? e.value : '')}
                                    />
                                </Form.Group>
                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Department</Form.Label>
                                    <Select
                                        options={DepartmentList}
                                        value={DepartmentList.find(option => option.value === inputdata.Department)}
                                        onChange={(e) => handleSelectChange('Department', e ? e.value : '')}
                                    />
                                </Form.Group>
                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Salary Type </Form.Label>
                                    <Select
                                        options={SalaryTypeList}
                                        value={SalaryTypeList.find(option => option.value === inputdata.SalaryType)}
                                        onChange={(e) => handleSelectChange('SalaryType', e ? e.value : '')}
                                    />
                                </Form.Group>

                                {/* Next Button */}
                                <Button className="submit-btn" variant="primary" type="button" onClick={handleNextStep}>
                                    Next
                                </Button>
                            </>
                        )}


                        {step === 2 && (
                            <div className="job-thing">

                                <Form.Group className="inputs mb-3 col-lg-12" controlId="formBasicSkills">
                                    <Form.Label>Skills Must Have</Form.Label>
                                    <Select
                                        options={skillsList}
                                        isMulti
                                        value={skillsList.filter(option => inputdata.SkillsMustHave.includes(option.value))}
                                        onChange={handleSkillsChange}
                                        placeholder="Select Skills"
                                    />
                                </Form.Group>

                                {/* Display selected skills as tags with remove option */}



                                <Form.Group className="inputs mb-3 col-lg-12" controlId="formBasicJobDes">
                                    <Form.Label>Job Description</Form.Label>
                                    <ReactQuill
                                        value={inputdata.JobDes}
                                        onChange={(value) => setInputData({ ...inputdata, JobDes: value })}
                                        placeholder="Enter Job Description"
                                        modules={modules}
                                        formats={formats}
                                        style={{ height: '150px' }}
                                    />
                                </Form.Group>

                                {/* Navigation Buttons */}
                                <Button className="submit-btn" variant="secondary" type="button" onClick={() => setStep(1)}>
                                    Back
                                </Button>
                                <Button className="submit-btn" variant="primary" type="button" onClick={handleNextStep1}>
                                    Next
                                </Button>
                            </div>
                        )}







                        {step === 3 && (
                            <div className="screening-container">
                                <div className="adding-screeningcontainer">
                                    <h1 className="screening-title">Step 3: Adding screening questions</h1>
                                    {/* <h3 className="screening-subtitle">Adding Screening Questions</h3>
                                    <p className="screening-description">
                                        By using screening questions your job post is highlighted to matching members.
                                    </p> */}

                                    <div className="question-container">

                                        {/* Education Section */}
                                        {showEducation && (
                                            <div>
                                                <div className="addingq1-sec">
                                                    <h1 className="q1-titel">Have you completed the following level of education?</h1>
                                                    <button type="button" className="icon-btn" onClick={onToggleActiveQuestion1}>
                                                        {statusOfCancelIcon ? (
                                                            <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730883253/icons8-cancel-50_1_-removebg-preview_ivhaoc.png" alt="Down Arrow" className="cancel-icon" />
                                                        ) : (
                                                            <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730956106/icons8-dropdown-50_1_hwzhte.png" alt="Cancel Icon" className="cancel-icon" />
                                                        )}


                                                    </button>
                                                </div>

                                                {statusOfCancelIcon && (
                                                    <div className="q1-values">
                                                        <Form.Group className="inputs mb-3 col-lg-6">
                                                            <Form.Label>Degree *</Form.Label>
                                                            <Select
                                                                options={DegreeType}
                                                                value={DegreeType.find(option => option.value === inputdata.DegreeType)}
                                                                onChange={(e) => handleSelectChange('DegreeType', e ? e.value : '')}
                                                            />
                                                        </Form.Group>

                                                        <div className="check-item">
                                                            <input
                                                                onChange={toggleCheckBox}
                                                                checked={inputdata.CheckboxClick}
                                                                type="checkbox"
                                                                className="checkbox-input"
                                                            />
                                                            <label>Must Have Skill</label>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Skills Section */}
                                        {showSkills && (
                                            <div>
                                                <div className="addingq1-sec">
                                                    <h1 className="q1-titel">How many years of work experience do you have with [Skills]?</h1>
                                                    <button type="button" onClick={onToggleActiveQuestion2}>
                                                        {statusOfCancelIcon1 ? (
                                                            <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730883253/icons8-cancel-50_1_-removebg-preview_ivhaoc.png" alt="Down Arrow" className="cancel-icon" />
                                                        ) : (
                                                            <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730956106/icons8-dropdown-50_1_hwzhte.png" alt="Cancel Icon" className="cancel-icon" />
                                                        )}

                                                    </button>
                                                </div>

                                                {statusOfCancelIcon1 && (
                                                    <div className="q1-values">
                                                        {/* <Form.Group className="inputs mb-3 col-lg-6">
                                                            <Form.Label>Skill *</Form.Label>
                                                            <Select
                                                                options={miniSkill}
                                                                value={miniSkill.find(option => option.value === inputdata.miniSkill)}
                                                                onChange={(e) => handleSelectChange('miniSkill', e ? e.value : '')}
                                                            />
                                                        </Form.Group> */}

                                                        <Form.Group className="inputs mb-3 col-lg-6">
                                                            <Form.Label>Skill *</Form.Label>
                                                            <Creatable
                                                                isClearable
                                                                options={miniSkill}  // predefined list of skills
                                                                value={miniSkill.find(option => option.value === inputdata.miniSkill) ||
                                                                    (inputdata.miniSkill === "other" && { label: inputdata.customMiniSkill, value: "other" })}
                                                                onChange={(e) => handleSelectChange('miniSkill', e ? e.value : '')}
                                                                onCreateOption={(newValue) => handleCustomSkill(newValue)}
                                                                placeholder="Select or Type your skill"
                                                            />
                                                        </Form.Group>

                                                        {/* Custom Skill Input */}
                                                        {inputdata.miniSkill === "other" && (
                                                            <Form.Group className="inputsc mb-3 col-lg-6">
                                                                <Form.Label>Enter Custom Skill</Form.Label>
                                                                <input
                                                                    type="text"
                                                                    name="customMiniSkill"
                                                                    value={inputdata.customMiniSkill || ''}
                                                                    onChange={(e) => setInputData({ ...inputdata, customMiniSkill: e.target.value })}
                                                                    placeholder="Type your custom skill here..."
                                                                    className="form-control"
                                                                />
                                                            </Form.Group>
                                                        )}


                                                        <div>
                                                            <label>Ideal Answer</label><br />
                                                            <div className="input-val">
                                                                <input
                                                                    name="minimumYears"
                                                                    value={inputdata.minimumYears}
                                                                    onChange={handleInputChange}
                                                                    type="text"
                                                                    className="min-input"
                                                                />
                                                                <p>Minimum</p>
                                                            </div>
                                                        </div>

                                                        <div className="check-item">
                                                            <input
                                                                type="checkbox"
                                                                checked={inputdata.CheckboxClick1}
                                                                onChange={toggleCheckBox1}
                                                                className="checkbox-input"
                                                            />
                                                            <label>Must Have Skill</label>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Custom Questions Section */}
                                        {showCustomQuestions && (
                                            <div>
                                                <div className="addingq1-sec">
                                                    <h1 className="q1-titel">Write a custom screening question.</h1>
                                                    <button type="button" onClick={onToggleActiveQuestion3}>
                                                        {statusOfCancelIcon2 ? (
                                                            <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730883253/icons8-cancel-50_1_-removebg-preview_ivhaoc.png" alt="Down Arrow" className="cancel-icon" />
                                                        ) : (
                                                            <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730956106/icons8-dropdown-50_1_hwzhte.png" alt="Cancel Icon" className="cancel-icon" />
                                                        )}
                                                    </button>
                                                </div>

                                                {statusOfCancelIcon2 && (
                                                    <div>
                                                        <label>Question *</label><br />
                                                        <textarea
                                                            name="custmizationQuestion"
                                                            value={inputdata.custmizationQuestion}
                                                            onChange={handleInputChange}
                                                            placeholder="Ask the question Here ..."
                                                            rows="4"
                                                            cols="200"
                                                            className='custimzation-textarea'
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                    </div>

                                    <div className="select-options">
                                        <button className={showEducation ? 'on' : 'off'} type="button" onClick={toggleEducation}>+ Education</button>
                                        <button className={showSkills ? 'on' : 'off'} type="button" onClick={toggleSkills}>+ Expected Skills</button>
                                        <button className={showCustomQuestions ? 'on' : 'off'} type="button" onClick={toggleCustomQuestions}>+ Custom Questions</button>
                                    </div>
                                    <Button className="submit-btn" variant="secondary" type="button" onClick={() => setStep(2)}>
                                        Back
                                    </Button>
                                    <Button className="submit-btn" variant="primary" type="button" onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        )}
                    </Row>
                </Form>
            </Card>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Register;