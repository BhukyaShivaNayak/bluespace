import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { registerfunc } from '../../Services/Apis';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

const Register = () => {

    const [inputdata, setInputData] = useState({
        Jname: "",
        Lname: "",
        Cname: "",
        Rname: "",
        Hname: ""

    });

    const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputdata, [name]: value })
    }

    const submitJobData = async (e) => {
        e.preventDefault();

        const { Jname,
            Lname,
            Cname,
            Rname,
            Hname } = inputdata;




        if (Jname === "") {
            toast.error("Job name is Required !")
        } else if (Lname === "") {
            toast.error("Location name is Required !")
        } else if (Cname === "") {
            toast.error("Compension is Required !")
        } else if (Rname === "") {
            toast.error("No. Of Resumes are Required !")
        } else if (Hname === "") {
            toast.error("No. Of Hires Required !")
        } else {


            toast.success("Submited Successfully !")

        }




    }


    return (
        <>
            <div className='container'>
                <h2 className='create-job'>Create Job Details</h2>
                <Card className='card'>

                    <Form>
                        <Row>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control type="text" name="Jname" value={inputdata.Jname} onChange={setInputValue} placeholder="Enter Job Title" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" name="Lname" value={inputdata.Lname} onChange={setInputValue} placeholder="Enter Location" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Compention</Form.Label>
                                <Form.Control type="text" name="Cname" value={inputdata.Cname} onChange={setInputValue} placeholder="Enter Compention" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Resume In Process</Form.Label>
                                <Form.Control type="text" name="Rname" value={inputdata.Rname} onChange={setInputValue} placeholder="No. Of Resumes In Process " />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Hires Required</Form.Label>
                                <Form.Control type="text" name="Hname" value={inputdata.Hname} onChange={setInputValue} placeholder="No. Of Hires Required" />

                            </Form.Group>



                            <Button variant="primary" type="submit" onClick={submitJobData}>
                                Submit
                            </Button>
                        </Row>
                    </Form>
                </Card>
                <ToastContainer position="top-center" />
            </div>
        </>
    )
}


export default Register
