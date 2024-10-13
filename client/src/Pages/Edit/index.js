import React, { useContext,useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {updateRegisterfunc} from '../../Services/Apis';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { addData } from '../../Components/context/ContextProvider';
import Select from 'react-select';

const Edit = () => {
    const [inputdata, setInputData] = useState({
        Jname: "",
        Lname: "",
        Cname: "",
        Rname: "",
        Hname: "",
        // Role: "",
        Client: "",
        Salary: "",
        DraftedBy: "",
        // Note: "",
        Industry: "",
        JobDes: "",
        JobID: "",
        JobName: "",
        OpeningDate: "",
        ExpiryDate: "",
        TotalOpenings: "",
        Experience: "",



    });


    const [WorkplaceType, setWorkplaceType] = useState("");
    const [EmploymentType, setEmploymentType] = useState("");
    const [SeniorityLevelType, setSeniorityLevelType] = useState("");
    const [HiringManager, setHiringManager] = useState("");
    const [JobPostType, setJobPostType] = useState("");
    const [JobTitle, setJobTitle] = useState("");
    const [JobType, setJobType] = useState("");
    const [StatusType, setStatusType] = useState("");
    const [Priority, setPriorityType] = useState("");
    const [Location, setLocation] = useState("");
    const [Department, setDepartment] = useState("");
   

    const [SalaryType, setSalaryType] = useState("");



    const navigate = useNavigate();
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
    ]

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
    ]

    const JobTypeList = [
        { value: "Part Time", label: "Part Time" },
        { value: "Full Time", label: "Full Time" }
    ]

    const StatusTypeList = [
        { value: "Completed", label: "Completed" },
        { value: "On Hold", label: "On Hold" },
        { value: "In Progress", label: "In Progress" },
        { value: "Archived", label: "Archived" }
    ]

    const PriorityList = [
        { value: "High", label: "High" },
        { value: "Low", label: "Low" },
        { value: "Medium", label: "Medium" }

    ]
    const LocationList = [
        { value: "Hyderabad", label: "Hyderbad" },
        { value: "Phoenix,AZ", label: "Phoenix,AZ" }
    ]
    const DepartmentList = [
        { value: "Marketing", label: "Marketing" },
        { value: "Sales", label: "Sales" },
        { value: "Finance", label: "Finance" },
        { value: "Human Resource", label: "Human Resource" }
    ]

    const SalaryTypeList = [
        { value: "Yearly", label: "Yearly" },
        { value: "Monthly", label: "Monthly" },
        { value: "Hourly", label: "Hourly" }
    ]

    const setWorkplaceTypeValue = (e) => {
        console.log(e)
        setWorkplaceType(e.value);
    };

    const setEmploymentTypeValue = (e) => {
        console.log(e)
        setEmploymentType(e.value);
    };
    const setSeniorityLevelTypeValue = (e) => {
        console.log(e)
        setSeniorityLevelType(e.value);
    };

    const setHiringManagerValue = (e) => {
        console.log(e)
        setHiringManager(e.value)
    }
    const setJobPostTypeValue = (e) => {
        console.log(e)
        setJobPostType(e.value)
    }
    const setJobTitleValue = (e) => {
        setJobTitle(e.value)
    }
    const setJobTypeValue = (e) => {
        setJobType(e.value)
    }
    const setStatusTypeValue = (e) => {
        setStatusType(e.value)
    }
    const setPriorityTypeValue = (e) => {
        setPriorityType(e.value);
    }

    const setLocationValue = (e) => {
        setLocation(e.value)
    }

    const setDepartmentValue = (e) => {
        setDepartment(e.value)
    }

    const setSalaryTypeValue = (e) => {
        setSalaryType(e.value)
    }


    const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputdata, [name]: value });
    };

    const submitJobUpdateData = async (e) => {
        e.preventDefault();

        const {
            Jname,
            Lname,
            Cname,
            Rname,
            Hname,
            // Role,
            Client,
            Salary,
            DraftedBy,
            // Note, 
            JobDes,
            Industry, JobID, JobName, OpeningDate, ExpiryDate, TotalOpenings, Experience
        } = inputdata;

        if (Jname === "") {
            toast.error("Job name is Required!");
        } else if (Lname === "") {
            toast.error("Location name is Required!");
        } else if (Cname === "") {
            toast.error("Compensation is Required!");
        } else if (Rname === "") {
            toast.error("Resume  in Process!");
        } else if (Hname === "") {
            toast.error("Hires  Required!");
        } 
        //else if (Role === "") {
        //     toast.error("Role Name is Required!");
        // } 
        else if (Client === "") {
            toast.error("Client Name is Required!");

        } else if (Salary === "") {
            toast.error("Salary is Required!");
        } else if (DraftedBy === "") {
            toast.error("Drafted By is Required!");
        }
        // else if (Note === "") {
        //     toast.error("Note is Required!");
        // } 
        else if (Industry === "") {
            toast.error("Industry is Required!");
        } else if (JobDes === "") {
            toast.error("JobDes is Required!");
        } else if (JobID === "") {
            toast.error("JobID is Required!");
        }
        else if (JobName === "") {
            toast.error("Job Name is Required")
        }

        else if (OpeningDate === "") {
            toast.error("Opening Date is Required")
        }
        else if (ExpiryDate === "") {
            toast.error("Expiry Date is Required")
        }
        else if (TotalOpenings === "") {
            toast.error("Total Openings is Required")
        }
        else if (Experience === "") {
            toast.error("Experience is Required")
        }


        else if (WorkplaceType === "") {
            toast.error("Workplace is required!")
        } else if (EmploymentType === "") {
            toast.error("Employment is required!")
        } else if (SeniorityLevelType === "") {
            toast.error("Seniority is required!")
        } else if (HiringManager === "") {
            toast.error("Hiring Manager is required!")
        } else if (JobPostType === "") {
            toast.error("Job Post Type is required")
        } else if (JobTitle === "") {
            toast.error("Job Title is required")
        }
        else if (JobType === "") {
            toast.error("Job Type is required")
        } else if (StatusType === "") {
            toast.error("Status is required")
        } else if (Priority === "") {
            toast.error("Priority is required")
        }
        else if (Location === "") {
            toast.error("Location is required")
        }
        else if (Department === "") {
            toast.error("Department is Required")
        }
        else if (SalaryType === "") {
            toast.error("SalaryType is Required")
        }

        else {
            const data = {
                Jname,
                Lname,
                Cname,
                Rname,
                Hname,
                // Role,
                Client,
                Salary,
                DraftedBy,
                // Note,
                JobDes,
                Industry, JobID, JobName, OpeningDate, ExpiryDate, TotalOpenings, Experience,
                WorkplaceType, EmploymentType, SeniorityLevelType, HiringManager, JobPostType, JobTitle, JobType, StatusType, Priority, Location, Department, SalaryType
            };

            const config = {
                "Content-Type": "application/json"
            }
            console.log(data)
            const response = await updateRegisterfunc(data, config);

            if (response.status === 200) {
                setInputData({
                    ...inputdata,
                    Jname: "",
                    Lname: "",
                    Cname: "",
                    Rname: "",
                    Hname: "",
                    // Role: "",
                    Client: "",
                    Salary: "",
                    DraftedBy: "",
                    // Note: "",
                    Industry: "",
                    JobDes: "",
                    JobID: "",
                    JobName: "",
                    OpeningDate: "",
                    ExpiryDate: "",
                    TotalOpenings: "",
                    Experience: ""
                });
                setWorkplaceType("");
                setEmploymentType("");
                setSeniorityLevelType("");
                setHiringManager("");
                setJobPostType("");
                setJobTitle("");
                setJobType("");
                setStatusType("");

                setPriorityType("");
                setLocation("");
                setDepartment("");
                setSalaryType("");

                setUseradd(response.data)
                
            }
            else if (response.status === 400) {
                toast.error("Job is added already")
            }
            else {
                toast.success("Job Updated  Sucessfully !");
                navigate("/active-jobs");
            }
        }
    };



    return (
        <>
            <div className='container'>
                <h2 className='create-job'>Update Job Details</h2>
                <Card className='card'>
                <Form onSubmit={submitJobUpdateData}>
                    <Row className="form-container">
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Job Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Jname"
                                value={inputdata.Jname}
                                onChange={setInputValue}
                                placeholder="Enter Job name"
                            />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>

                            <Form.Control
                                type="text"
                                name="Lname"
                                value={inputdata.Lname}
                                onChange={setInputValue}
                                placeholder="Enter Location"
                            />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label> Compensation</Form.Label>
                            <Form.Control
                                type="text"
                                name="Cname"
                                value={inputdata.Cname}
                                onChange={setInputValue}
                                placeholder="Enter Compenstion"
                            />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Resumes in Process</Form.Label>
                            <Form.Control
                                type="text"
                                name="Rname"
                                value={inputdata.Rname}

                                onChange={setInputValue}

                                placeholder="Resumes in Process"
                            />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Hires Required</Form.Label>
                            <Form.Control
                                type="text"
                                name="Hname"
                                value={inputdata.Hname}
                                onChange={setInputValue}
                                placeholder="Hires Required"
                            />
                        </Form.Group>
                        {/* <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Role Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Role"
                                value={inputdata.Role}
                                onChange={setInputValue}
                                placeholder="Role Name is Required"
                            />
                        </Form.Group> */}
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Client"
                                value={inputdata.Client}
                                onChange={setInputValue}
                                placeholder="Client Name is Required"
                            />
                        </Form.Group>


                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Salary Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Salary"
                                value={inputdata.Salary}
                                onChange={setInputValue}
                                placeholder="Salary is Required"
                            />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Drafted By</Form.Label>
                            <Form.Control
                                type="text"
                                name="DraftedBy"
                                value={inputdata.DraftedBy}
                                onChange={setInputValue}
                                placeholder="Drafted By is Required"
                            />
                        </Form.Group>
                        {/* <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Note</Form.Label>
                            <Form.Control
                                type="text"
                                name="Note"
                                value={inputdata.Note}
                                onChange={setInputValue}
                                placeholder="Note is Required"
                            />
                        </Form.Group> */}

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Industry</Form.Label>
                            <Form.Control
                                type="text"
                                name="Industry"
                                value={inputdata.Industry}
                                onChange={setInputValue}
                                placeholder="Industry is Required"
                            />
                        </Form.Group>

                        {/* <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="JobDes"
                                value={inputdata.JobDes}
                                onChange={setInputValue}
                                placeholder="Job Description is Required"
                            />
                        </Form.Group> */}


                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Job ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="JobID"
                                value={inputdata.JobID}
                                onChange={setInputValue}
                                placeholder="Job ID is Required"
                            />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Job Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="JobName"
                                value={inputdata.JobName}
                                onChange={setInputValue}
                                placeholder="Job Name is Required"
                            />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Opening Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="OpeningDate"
                                value={inputdata.OpeningDate}
                                onChange={setInputValue}
                                placeholder="Opening Date is Required"
                            />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="ExpiryDate"
                                value={inputdata.ExpiryDate}
                                onChange={setInputValue}
                                placeholder="Opening Date is Required"
                            />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Total Openings</Form.Label>
                            <Form.Control
                                type="text"
                                name="TotalOpenings"
                                value={inputdata.TotalOpenings}
                                onChange={setInputValue}
                                placeholder="Total Openings  Required"
                            />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                type="text"
                                name="Experience"
                                value={inputdata.Experience}
                                onChange={setInputValue}
                                placeholder="Experience Required"
                            />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label >Select Your Workplace Type</Form.Label>
                            <Select style={{ backgroundColor: "lightblue" }} options={options1} onChange={setWorkplaceTypeValue} />
                        </Form.Group>



                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Select Your Employment Type</Form.Label>
                            <Select options={options2} onChange={setEmploymentTypeValue} />
                        </Form.Group>


                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Select SeniorityLevel Type</Form.Label>
                            <Select options={options3} onChange={setSeniorityLevelTypeValue} />
                        </Form.Group>

                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Hiring Manager</Form.Label>
                            <Select options={hiringManagerList} onChange={setHiringManagerValue} />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Job Post Type</Form.Label>
                            <Select options={JobPostTypeList} onChange={setJobPostTypeValue} />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Job Title</Form.Label>
                            <Select options={JobTitleList} onChange={setJobTitleValue} />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Job Type</Form.Label>
                            <Select options={JobTypeList} onChange={setJobTypeValue} />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Status</Form.Label>
                            <Select options={StatusTypeList} onChange={setStatusTypeValue} />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Priority</Form.Label>
                            <Select options={PriorityList} onChange={setPriorityTypeValue} />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Select options={LocationList} onChange={setLocationValue} />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Department</Form.Label>
                            <Select options={DepartmentList} onChange={setDepartmentValue} />
                        </Form.Group>
                        <Form.Group className="inputs mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Salary Typet</Form.Label>
                            <Select options={SalaryTypeList} onChange={setSalaryTypeValue} />
                        </Form.Group>


                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control
                                as="textarea"  // Set the control to be a textarea
                                name="JobDes"
                                value={inputdata.JobDes}
                                onChange={setInputValue}
                                placeholder="Job Description is Required"
                                rows={4}  // Optional: specify the number of rows for the textarea
                            />
                        </Form.Group>



                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Row>

                </Form>
                </Card>
                <ToastContainer position="top-center" />
            </div>

        </>
    );
};

export default Edit;