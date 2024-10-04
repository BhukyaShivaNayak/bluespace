import React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
import "./index.css";

const Tables = (props) => {
    const { userdata } = props;
    console.log(userdata);

    return (
        <div className='containers'>
            <Row>
                <div className="col mt-2">
                    <Table>
                        <thead className='thead-secondary'>
                            <tr className='table-secondary'>
                                <th className='th-custom'>Job Title</th>
                                <th className='th-custom'>Location</th>
                                <th className='th-custom'>Compensation</th>
                                <th className='th-custom'>Resume In Progress</th>
                                <th className='th-custom'>Hires Required</th>
                                <th className='th-custom'>Workplace Type</th>
                                <th className='th-custom'>Employment Type</th>
                                <th className='th-custom'>Seniority Level</th>
                                <th className='th-custom'>Job Description</th>
                                <th className='th-custom'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userdata.map((element) => (
                                <tr key={element._id}>
                                    <td className='td-custom'>{element.Jname}</td>
                                    <td className='td-custom'>{element.Lname}</td>
                                    <td className='td-custom'>{element.Cname}</td>
                                    <td className='td-custom'>{element.Rname}</td>
                                    <td className='td-custom'>{element.Hname}</td>
                                    <td className='td-custom'>{element.WorkplaceType}</td>
                                    <td className='td-custom'>{element.EmploymentType}</td>
                                    <td className='td-custom'>{element.SeniorityLevelType}</td>
                                    <td className='td-custom'>{element.JobDes}</td>
                                    <td className='td-custom'>
                                        <Dropdown>
                                            <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                                Action
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>Submit Job</Dropdown.Item>
                                                <Dropdown.Item>
                                                    <NavLink to={`/edit/${element._id}`}>
                                                        Edit Job
                                                    </NavLink>
                                                </Dropdown.Item>
                                                <Dropdown.Item>Close Job</Dropdown.Item>
                                                <Dropdown.Item onClick="">Quick Match</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Row>
        </div>
    );
}

export default Tables;
