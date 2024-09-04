/*import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerfunc } from '../../Services/Apis';
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

    const submitJobData= async (e) => {
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


           // toast.success("Submited Successfully !")

            const data = {
                Jname: Jname,
                Lname: Lname,
                Cname: Cname,
                Rname: Rname,
                Hname:Hname
              
              };
              
              const config = {
                headers: {
                  "Content-Type": "application/json"
                }
              };
              
              
              const jsonData = JSON.stringify(data);
              
              const response = await registerfunc(jsonData, config);

              if(response.status === 200){
                setInputData({
                  ...inputdata,
                  Jname:"",
                  Lname: "",
                  Cname: "",
                  Rname: "",
                  Hname: ""
                 
                });
              

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
}

export default Register */

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerfunc } from '../../Services/Apis';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

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
        setInputData({ ...inputdata, [name]: value });
    };

    /* const submitJobData = async (e) => {
         e.preventDefault();
 
         const { Jname, Lname, Cname, Rname, Hname } = inputdata;
 
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
         } else {
             const data = {
                 Jname,
                 Lname,
                 Cname,
                 Rname,
                 Hname
             };
 
             const config = {
                 headers: {
                     "Content-Type": "application/json"
                 }
             };
 
             const jsonData = JSON.stringify(data);
 
             try {
                 const response = await registerfunc(jsonData, config);
 
                 if (response.status === 200) {
                     setInputData({
                         Jname: "",
                         Lname: "",
                         Cname: "",
                         Rname: "",
                         Hname: ""
                     });
                     toast.success("Submitted Successfully!");
                 }
             } catch (error) {
                 toast.error("An error occurred while submitting the form.");
             }
         }
     };*/
    const submitJobData = async (e) => {
        e.preventDefault();

        const { Jname, Lname, Cname, Rname, Hname } = inputdata;

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
        } else {
            const data = {
                Jname,
                Lname,
                Cname,
                Rname,
                Hname
            };

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };

            console.log('Sending Data:', data); // Log the data being sent

            try {
                const response = await registerfunc(data, config);

                if (response.status === 200) {
                    setInputData({
                        Jname: "",
                        Lname: "",
                        Cname: "",
                        Rname: "",
                        Hname: ""
                    });
                    toast.success("Submitted Successfully!");
                } else {
                    
                    console.error('API Response Error:', response.data);
                   // toast.error("Submission failed: " + (response.data.error || "Unknown error"));
                }
            } catch (error) {
                console.error('Submission Error:', error);
                toast.error("An error occurred while submitting the form.");
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

