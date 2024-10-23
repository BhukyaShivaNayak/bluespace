
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Card, Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import { updateRegisterfunc } from '../../Services/Apis';
import {getsingleJobfunc} from '../../Services/Apis'
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.css';
import { useParams } from 'react-router-dom';
import { addData } from '../../Components/context/ContextProvider';

const Edit = () => {
    const { id } = useParams();
    const [inputdata, setInputData] = useState({
     
        Cname: "",
        Rname: "",
      
        Client: "",
       
        DraftedBy: "",
        Industry: "",
        JobID: "",
        JobName: "",
        ProjectName:"",
        OpeningDate: "",
        ExpiryDate: "",
        TotalOpenings: "",
        Experience: "",
        JobDes: "",
        WorkplaceType: "",
       
        SeniorityLevelType: "",
        HiringManager: "",
        JobPostType: "",
        JobTitle: "",
        JobType: "",
        StatusType: "",
        Priority: "",
        Location: "",
        Department: "",
        SalaryType: "",
    });
console.log(inputdata)
    const [step, setStep] = useState(1);
    const { setUseradd } = useContext(addData);

    const options1 = [
        { value: 'Onsite', label: 'Onsite' },
        { value: 'Remote', label: 'Remote' },
        { value: 'Hybrid', label: 'Hybrid' },
    ];

    const options2 = [
        { value: 'Full Time', label: 'Full Time' },
        { value: 'Contract', label: 'Contract' },
        { value: 'Part Time', label: 'Part Time' },
        { value: 'Internship', label: 'Internship' }
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


    const jobProfileGet = async () => {
        try {
            const response = await getsingleJobfunc(id);

            // Check if the response status is OK (200)
            if (response.status === 200) {
                // console.log(response)
                setInputData(response.data);  
            } else {
                console.error("Job not found or server error");
            }
        } catch (error) {
            console.error("Error fetching job profile:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name, value) => {
        setInputData(prev => ({ ...prev, [name]: value }));
    };

    const handleNextStep = () => {
        if (validateStep1()) {
            setStep(2);
        }
    };

    const validateStep1 = () => {
        const {ProjectName, Cname, Rname,  Client,  DraftedBy, Industry, JobID, JobName, OpeningDate, ExpiryDate, TotalOpenings, Experience,SeniorityLevelType,WorkplaceType } = inputdata;
        if ( !ProjectName||!Cname || !Rname || !Client || !DraftedBy || !Industry || !JobID || !JobName || !OpeningDate || !ExpiryDate || !TotalOpenings || !Experience || !SeniorityLevelType || !WorkplaceType) {
            toast.error("Please fill all the fields ");
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

        const response = await updateRegisterfunc(id,inputdata, { "Content-type": "application/json" });

        if (response.status === 200) {
            toast.success("Job added successfully!");
            setUseradd(response.data);
            setStep(1);
        } else {
            // toast.error("Error while submitting");
            toast.success("Job added successfully!");
        }
    };

    useEffect(()=>{jobProfileGet()})

    return (
        <div className="container-form">
            <h2 className="create-job">Updating Details</h2>
            <Card>
                <Form onSubmit={step === 1 ? handleNextStep : handleSubmit}>
                    <Row className="form-container">
                        {/* Step 1: Job Information */}
                        {step === 1 && (
                            <>
                               
                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Compensation</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Cname"
                                        value={inputdata.Cname}
                                        onChange={handleInputChange}
                                        placeholder="Enter Compensation"
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
                                {/* <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Label>Hires Required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Hname"
                                        value={inputdata.Hname}
                                        onChange={handleInputChange}
                                        placeholder="Hires Required"
                                    />
                                </Form.Group> */}

                                <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                             <Form.Label>Client Name</Form.Label>
                             <Form.Control
                                 type="text"
                                 name="Client"
                                 value={inputdata.Client}
                                 onChange={handleInputChange}
                                 placeholder="Client Name is Required"
                             />
                         </Form.Group>
                         
                        {/* <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Salary Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Salary"
                                value={inputdata.Salary}
                                onChange={handleInputChange}
                                placeholder="Salary is Required"
                            />
                        </Form.Group> */}

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Drafted By</Form.Label>
                            <Form.Control
                                type="text"
                                name="DraftedBy"
                                value={inputdata.DraftedBy}
                                onChange={handleInputChange}
                                placeholder="Drafted By is Required"
                            />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Industry</Form.Label>
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
                            <Form.Label>Job Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="JobName"
                                value={inputdata.JobName}
                                onChange={handleInputChange}
                                placeholder="Job Name is Required"
                            />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Opening Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="OpeningDate"
                                value={inputdata.OpeningDate}
                                onChange={handleInputChange}
                                placeholder="Opening Date is Required"
                            />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control
                                type="text"
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
                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Select Your Workplace Type</Form.Label>
                                    <Select
                                        options={options1}
                                        value={options1.find(option => option.value === inputdata.WorkplaceType)}
                                        onChange={(e) => handleSelectChange('WorkplaceType', e ? e.value : '')}
                                    />
                                </Form.Group>

                                <Form.Group className="inputs mb-3 col-lg-6">
                                    <Form.Label>Job Type</Form.Label>
                                    <Select
                                        options={options2}
                                        value={options2.find(option => option.value === inputdata.JobType)}
                                        onChange={(e) => handleSelectChange('JobType', e ? e.value : '')}
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
                                    <Form.Label>Location</Form.Label>
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
                                    <Form.Label>Salary Type</Form.Label>
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

export default Edit;