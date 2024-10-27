
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Card, Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import { registerfunc } from '../../Services/Apis';

import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import Select from 'react-select';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.css';
import { addData } from '../../Components/context/ContextProvider';



const Register = () => {
    const [inputdata, setInputData] = useState({


        Cname: "",
        Rname: "",

        Client: "",

        DraftedBy: "",
        Industry: "",
        ProjectName: "",
        JobID: "",
        JobName: "",
        OpeningDate: "",
        ExpiryDate: "",
        TotalOpenings: "",
        Experience: "",
        JobDes: "",

        WorkplaceType: "Onsite",

        SeniorityLevelType: "Entry Level",
        HiringManager: "Tejaswi Pessapati",
        JobPostType: "Public",
        JobTitle: "IT",
        JobType: "Full Time",
        StatusType: "In Progress",
        Priority: "High",
        Location: "Hyderabad",
        Department: "Marketing",
        SalaryType: "Yearly",
        SkillsMustHave: []
    });


    const navigate = useNavigate()
    const cancelJob = () => {
        navigate("/active-jobs");
    }


    const [step, setStep] = useState(1);
    const { setUseradd } = useContext(addData);

    const skillsList = [
        { value: 'Java', label: 'Java' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Python', label: 'Python' },
        { value: 'C++', label: 'C++' },
        { value: 'React', label: 'React' },
        { value: 'Node.js', label: 'Node.js' },
        // Add more skills as needed
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
        { value: "Completed", label: "Completed" },
        { value: "On Hold", label: "On Hold" },
        { value: "In Progress", label: "In Progress" },
        { value: "Archived", label: "Archived" }
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

    const handleSelectChange = (name, value) => {
        setInputData(prev => ({ ...prev, [name]: value }));
    };

    const handleNextStep = () => {
        if (validateStep1()) {
            setStep(2);
        }
    };


    const validateStep1 = () => {
        const { ProjectName, Cname, Rname, Client, DraftedBy, Industry, JobID, JobName, OpeningDate, ExpiryDate, TotalOpenings, Experience } = inputdata;
        if (!ProjectName || !Cname || !Rname || !Client || !DraftedBy || !Industry || !JobID || !JobName || !OpeningDate || !ExpiryDate || !TotalOpenings || !Experience) {
            toast.error("Please fill all the fields in Step 1");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputdata.JobDes) {
            toast.error("Please enter a Job Description");
            return;
        }

        const response = await registerfunc(inputdata, { "Content-type": "application/json" });
        console.log(response)

        if (response.status === 200) {
            toast.success("Job added successfully!");
            setUseradd(response.data);
            setStep(1);
        } else {
            // toast.error("Error while submitting");
            toast.success("Job added successfully!");
        }
    };

    return (
        <div className="container-form">
            <div>
                <h2 className="create-job">Create Job Details</h2>
                <Button className='' onClick={cancelJob}>
                    Cancel
                </Button>
            </div>

            <Card>
                <Form onSubmit={step === 1 ? handleNextStep : handleSubmit}>
                    <Row className="form-container">
                        {/* Step 1: Job Information */}
                        {step === 1 && (
                            <>



                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Salary

                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Cname"
                                        value={inputdata.Cname}
                                        onChange={handleInputChange}
                                        placeholder="Salary Range"
                                    />
                                </Form.Group>
                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Resumes in Process</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Rname"
                                        value={inputdata.Rname}
                                        onChange={handleInputChange}
                                        placeholder="Resumes in Process"
                                    />
                                </Form.Group>

                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Client Name <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span></Form.Label>
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
                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
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
                                    <Form.Label>Job Name <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span></Form.Label>
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

                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="ProjectName"
                                        value={inputdata.ProjectName}
                                        onChange={handleInputChange}
                                        placeholder="Project Name Required"
                                    />
                                </Form.Group>

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
                                    <Form.Label>Job Title</Form.Label>
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
                                    <Form.Label>Salary Type <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span></Form.Label>
                                    <Select
                                        options={SalaryTypeList}
                                        value={SalaryTypeList.find(option => option.value === inputdata.SalaryType)}
                                        onChange={(e) => handleSelectChange('SalaryType', e ? e.value : '')}
                                    />
                                </Form.Group>


                                <Button className="submit-btn" variant="primary" type="button" onClick={handleNextStep}>
                                    Next
                                </Button>
                            </>
                        )}

                        {/* Step 2: Job Description */}
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

                                <Button className="submit-btn" variant="secondary" type="button" onClick={() => setStep(1)}>
                                    Back
                                </Button>
                                <Button className="submit-btn" variant="primary" type="submit">
                                    Submit
                                </Button>
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