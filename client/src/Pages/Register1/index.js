import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerfunc1 } from '../../Services/Apis';
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { addData } from '../../Components/context/ContextProvider';

const Register1 = () => {
    const [inputdata, setInputData] = useState({
        Candidatename: "",
        Contact: "",
        Email: "",
        Resume: "",
        RecruiterFeedback: "",
        Interview: "",

        JoiningDate: ""
    });

    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    const { setUseradd } = useContext(addData);

    const options = [
        { value: 'Selected', label: 'Selected' },
        { value: 'Rejected', label: 'Rejected' },
        { value: 'On Hold', label: 'On Hold' },
    ];

    const setStatusValue = (e) => {
        console.log(e)
        setStatus(e.value);
    };

    const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputdata, [name]: value });
    };

    const submitJobData = async (e) => {
        e.preventDefault();

        const {
            Candidatename,
            Contact,
            Email,
            Resume,
            RecruiterFeedback,
            Interview,
            JoiningDate
        } = inputdata;

        if (Candidatename === "") {
            toast.error("Candidate name is Required!");
        } else if (Contact === "") {
            toast.error("Contact name is Required!");
        } else if (Email === "") {
            toast.error("Email is Required!");
        } else if (Resume === "") {
            toast.error("Resume  Risequired!");
        } else if (RecruiterFeedback === "") {
            toast.error("Recruiter Feedback is Required!");
        } else if (Interview === "") {
            toast.error("Interviewer Name is Required!");
        } else if (status === "") {
            toast.error("Status is Required!");

        } else if (JoiningDate === "") {
            toast.error("Salary is Required!");
        } else {
            const data = {
                Candidatename,
                Contact,
                Email,
                Resume,
                RecruiterFeedback,
                Interview,
                status,
                JoiningDate
            };

            const config = {
                "Content-Type": "application/json"
            }
            console.log(data)
            const response = await registerfunc1(data, config);

            if (response.status === 200) {
                setInputData({
                    ...inputdata,
                    Candidatename: "",
                    Contact: "",
                    Email: "",
                    Resume: "",
                    RecruiterFeedback: "",
                    Interview: "",
                    JoiningDate: ""
                });
                setStatus("");
                setUseradd(response.data)
                navigate("/pipeline");
            }
            else if (response.status === 400) {
                toast.error("Candidate is added already")
            }
            else {
                toast.success("Added Candidate Sucessfully !");
            }
        }
    };
   

    return (
        <div className='container'>
            <h2 className='create-job'>Create Job Details</h2>
            <Card className='card'>
                <Form onSubmit={submitJobData}>
                    <Row>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Candidate Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Candidatename"
                                value={inputdata.Candidatename}
                                onChange={setInputValue}
                                placeholder="Enter Candidate name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="text"
                                name="Contact"
                                value={inputdata.Contact}
                                onChange={setInputValue}
                                placeholder="Enter Contact"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>  Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="Email"
                                value={inputdata.Email}
                                onChange={setInputValue}
                                placeholder="Enter   Email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Resume</Form.Label>
                            <Form.Control
                                type="text"
                                name="Resume"
                                value={inputdata.Resume}

                                onChange={setInputValue}

                                placeholder="Resume"
                            />
                        </Form.Group>
                      
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Recruiter Feedback</Form.Label>
                            <Form.Control
                                type="text"
                                name="RecruiterFeedback"
                                value={inputdata.RecruiterFeedback}
                                onChange={setInputValue}
                                placeholder="Recruiter Feedback Required"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Interview</Form.Label>
                            <Form.Control
                                type="text"
                                name="Interview"
                                value={inputdata.Interview}
                                onChange={setInputValue}
                                placeholder="Interview"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Select Your Status</Form.Label>
                            <Select options={options} onChange={setStatusValue} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="JoiningDate"
                                value={inputdata.JoiningDate}
                                onChange={setInputValue}
                                placeholder="Enter Joining Date"
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

export default Register1;