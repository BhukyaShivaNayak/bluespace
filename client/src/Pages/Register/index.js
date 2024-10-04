import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerfunc } from '../../Services/Apis';
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { addData } from '../../Components/context/ContextProvider';

const Register = () => {
    const [inputdata, setInputData] = useState({
        Jname: "",
        Lname: "",
        Cname: "",
        Rname: "",
        Hname: "",
        Role: "",
        Client: "",
        Salary: "",
        DraftedBy: "",
        Note: "",
        Industry: "",
        JobDes: ""

    });

    const [WorkplaceType, setWorkplaceType] = useState("");

    const [EmploymentType, setEmploymentType] = useState("");
    const [SeniorityLevelType, setSeniorityLevelType] = useState("");
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
    const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputdata, [name]: value });
    };

    const submitJobData = async (e) => {
        e.preventDefault();

        const {
            Jname,
            Lname,
            Cname,
            Rname,
            Hname,
            Role,
            Client,
            Salary,
            DraftedBy,
            Note, Industry, JobDes
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
        } else if (Role === "") {
            toast.error("Role Name is Required!");
        } else if (Client === "") {
            toast.error("Client Name is Required!");

        } else if (Salary === "") {
            toast.error("Salary is Required!");
        } else if (DraftedBy === "") {
            toast.error("Drafted By is Required!");
        } else if (Note === "") {
            toast.error("Note is Required!");
        } else if (Industry === "") {
            toast.error("Industry is Required!");
        } else if (JobDes === "") {
            toast.error("JobDes is Required!");
        } else if (WorkplaceType === "") {
            toast.error("Workplace is required!")
        } else if (EmploymentType === "") {
            toast.error("Employment is required!")
        } else if (SeniorityLevelType === "") {
            toast.error("Seniority is required!")
        }


        else {
            const data = {
                Jname,
                Lname,
                Cname,
                Rname,
                Hname,
                Role,
                Client,
                Salary,
                DraftedBy,
                Note,
                Industry,
                WorkplaceType, EmploymentType, SeniorityLevelType, JobDes
            };

            const config = {
                "Content-Type": "application/json"
            }
            console.log(data)
            const response = await registerfunc(data, config);

            if (response.status === 200) {
                setInputData({
                    ...inputdata,
                    Jname: "",
                    Lname: "",
                    Cname: "",
                    Rname: "",
                    Hname: "",
                    Role: "",
                    Client: "",
                    Salary: "",
                    DraftedBy: "",
                    Note: "",
                    Industry: "",
                    JobDes: ""
                });
                setWorkplaceType("");
                setEmploymentType("");
                setSeniorityLevelType("");
                setUseradd(response.data)
                navigate("/active-jobs");
            }
            else if (response.status === 400) {
                toast.error("Job is added already")
            }
            else {
                toast.success("Added Job Sucessfully !");
            }
        }
    };


    return (
        <div className='container'>
            <h2 className='create-job'>Create Job Details</h2>
            <Card className='card'>
                <Form onSubmit={submitJobData}>
                    <Row>
                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Job Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Jname"
                                value={inputdata.Jname}
                                onChange={setInputValue}
                                placeholder="Enter Job name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="Lname"
                                value={inputdata.Lname}
                                onChange={setInputValue}
                                placeholder="Enter Location"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label> Compensation</Form.Label>
                            <Form.Control
                                type="text"
                                name="Cname"
                                value={inputdata.Cname}
                                onChange={setInputValue}
                                placeholder="Enter Compenstion"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Resumes in Process</Form.Label>
                            <Form.Control
                                type="text"
                                name="Rname"
                                value={inputdata.Rname}

                                onChange={setInputValue}

                                placeholder="Resumes in Process"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Hires Required</Form.Label>
                            <Form.Control
                                type="text"
                                name="Hname"
                                value={inputdata.Hname}
                                onChange={setInputValue}
                                placeholder="Hires Required"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Role Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Role"
                                value={inputdata.Role}
                                onChange={setInputValue}
                                placeholder="Role Name is Required"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Client"
                                value={inputdata.Client}
                                onChange={setInputValue}
                                placeholder="Client Name is Required"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Salary Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Salary"
                                value={inputdata.Salary}
                                onChange={setInputValue}
                                placeholder="Salary is Required"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Drafted By</Form.Label>
                            <Form.Control
                                type="text"
                                name="DraftedBy"
                                value={inputdata.DraftedBy}
                                onChange={setInputValue}
                                placeholder="Drafted By is Required"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Industry</Form.Label>
                            <Form.Control
                                type="text"
                                name="Industry"
                                value={inputdata.Industry}
                                onChange={setInputValue}
                                placeholder="Industry is Required"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Note</Form.Label>
                            <Form.Control
                                type="text"
                                name="Note"
                                value={inputdata.Note}
                                onChange={setInputValue}
                                placeholder="Note is Required"
                            />
                        </Form.Group>




                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Select Your Workplace Type</Form.Label>
                            <Select options={options1} onChange={setWorkplaceTypeValue} />
                        </Form.Group>



                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Select Your Employment Type</Form.Label>
                            <Select options={options2} onChange={setEmploymentTypeValue} />
                        </Form.Group>


                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Select SeniorityLevel Type</Form.Label>
                            <Select options={options3} onChange={setSeniorityLevelTypeValue} />
                        </Form.Group>
                        {/* <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>JobDescription</Form.Label>
                            <Form.Control
                                type="text"
                                name="JobDes"
                                value={inputdata.JobDes}
                                onChange={setInputValue}
                                placeholder="JobDescription is Required"
                            />
                        </Form.Group>
*/}<Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
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
    );
};

export default Register;