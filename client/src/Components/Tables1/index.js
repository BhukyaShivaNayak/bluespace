import React from 'react';
import Row from 'react-bootstrap/Row';
//import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
//import Dropdown from 'react-bootstrap/Dropdown';
//import Badge from 'react-bootstrap/Badge';
import "./index.css";
//import { NavLink } from 'react-router-dom';


const Tables1 = (props) => {
    const { userdata1 } = props
    console.log(userdata1)

    return (
        <>
            <div className='containers'>
                <Row>
                    <div className="col mt-2">

                        { /*<Table className='' >
                            <thead className='thead-secondary'>
                                <tr className='table-secondary'>
                                    <th className='th-custom'>Candidate name</th>
                                    <th className='th-custom'>Contact</th>
                                    <th className='th-custom'>Email</th>
                                    <th className='th-custom'>Resume</th>
                                    <th className='th-custom'>Recruiter Feedback</th>
                                    <th className='th-custom'>Interview</th>
                                    <th className='th-custom'>Status</th>
                                    <th className='th-custom'>Joining Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {userdata1.length > 0 && userdata1.map((element) => {
                                    return (
                                        <tr>
                                            <td className='td-custom'>{element.Candidatename}</td>
                                            <td className='td-custom'>{element.Contact}</td>
                                            <td className='td-custom'>{element.Email}</td>
                                            <td className='td-custom'>{element.Resume}</td>
                                            <td className='td-custom'>{element.RecruiterFeedback}</td>
                                            <td className='td-custom'>{element.Interview}</td>
                                            <td style={{color: element.status ==='Rejected' ? "red" : 
                                                element.status ==='On Hold'?'yellow':"green"
                                            }}>{element.status}</td>
                                            <td className='td-custom k'>{element.JoiningDate}</td>

                                        </tr>
                                    )
                                })

                                }

                            </tbody>
                        </Table>
*/}

                        <Table striped >
                            <thead className="secondary">
                                <tr className='bg-secondary'>
                                    <th>Candidate name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Resume</th>
                                    <th>Recruiter Feedback</th>
                                    <th>Interview</th>
                                    <th>Status</th>

                                    <th>Joining Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userdata1.length > 0 && userdata1.map((element) => {
                                    return (
                                        <tr>
                                            <td >{element.Candidatename}</td>
                                            <td >{element.Contact}</td>
                                            <td>{element.Email}</td>
                                            <td >{element.Resume}</td>
                                            <td >{element.RecruiterFeedback}</td>
                                            <td >{element.Interview}</td>
                                            <td style={{
                                                color: element.status === 'Rejected' ? "red" :
                                                    element.status === 'On Hold' ? 'yellow' : "green"
                                            }}>{element.status}</td>
                                            <td >{element.JoiningDate}</td>

                                        </tr>
                                    )
                                })

                                }
                            </tbody>
                        </Table>

                    </div>
                </Row>
            </div>
        </>
    );
}

export default Tables1;