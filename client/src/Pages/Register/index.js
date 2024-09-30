import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerfunc } from '../../Services/Apis';
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
        Notes: ""
    });

    const navigate = useNavigate();

    const { /*useradd,*/ setUseradd } = useContext(addData);

    const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputdata, [name]: value });
    };


    const submitJobData = async (e) => {
        e.preventDefault();

        const { Jname, Lname, Cname, Rname, Hname, Role, Client, Salary, DraftedBy, Notes } = inputdata;

        if (Jname === "") {
            toast.error("Job name is Required!");
        } else if (Lname === "") {
            toast.error("Location name is Required!");
        } else if (Cname === "") {
            toast.error("Compensation is Required!");
        } else if (Rname === "") {
            toast.error("No. Of Resumes are Required!");
        } else if (Hname === "") {
            toast.error("No. Of Hires Required!");
        }
        else if (Role === "") {
            toast.error("Role Name is Required!");
        }
        else if (Client === "") {
            toast.error("Client Name is Required!");
        }
        else if (Salary === "") {
            toast.error("Salary is Required!");
        }
        else if (DraftedBy === "") {
            toast.error("Drafted by is Required!");
        }
        else if (Notes === "") {
            toast.error("Notes is Required!");
        }

        else {
            const data = {
                Jname,
                Lname,
                Cname,
                Rname,
                Hname,
                Role, Client, Salary, DraftedBy, Notes
            };



            const config = {
                "Content-Type": "application/json"
            }

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
                    Notes: ""
                });

                setUseradd(response.data)

                navigate("/active-jobs");


            } else {
                toast.success("Job is Created Sucessfully !");
            }


        }
    };


    return (
        <>
            <div className='container'>
                <h2 className='create-job'>Create Job Details</h2>
                <Card className='card'>
                    <Form onSubmit={submitJobData}>
                        <Row>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Jname"
                                    value={inputdata.Jname}
                                    onChange={setInputValue}
                                    placeholder="Enter Job Title"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Lname"
                                    value={inputdata.Lname}
                                    onChange={setInputValue}
                                    placeholder="Enter Location"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Compensation</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Cname"
                                    value={inputdata.Cname}
                                    onChange={setInputValue}
                                    placeholder="Enter Compensation"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Resumes In Process</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Rname"
                                    value={inputdata.Rname}
                                    onChange={setInputValue}
                                    placeholder="No. Of Resumes In Process"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Hires Required</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Hname"
                                    value={inputdata.Hname}
                                    onChange={setInputValue}
                                    placeholder="No. Of Hires Required"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Role Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Role"
                                    value={inputdata.Role}
                                    onChange={setInputValue}
                                    placeholder="Role Name Required"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Client Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Client"
                                    value={inputdata.Client}
                                    onChange={setInputValue}
                                    placeholder="Client Name Required"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Salary"
                                    value={inputdata.Salary}
                                    onChange={setInputValue}
                                    placeholder="Enter Salary"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Drafted By</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="DraftedBy"
                                    value={inputdata.DraftedBy}
                                    onChange={setInputValue}
                                    placeholder="Drafted By"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Notes Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Notes"
                                    value={inputdata.Notes}
                                    onChange={setInputValue}
                                    placeholder="Notes"
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

export default Register;
