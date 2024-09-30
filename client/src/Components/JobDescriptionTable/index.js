import React from 'react';
import Row from 'react-bootstrap/Row';
//import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import "./index.css";
import { NavLink } from 'react-router-dom';

const JobDescriptionTable = (props) => {
    const { userdata } = props
    console.log(userdata)

    return (
        <>
            <div className='containers'>
                <Row>
                    <div className="col mt-2">

                        <Table className='table-custom w-70' responsive="lg">
                            <thead className='thead-secondary'>
                                <tr className='table-secondary'>
                                    <th className='th-custom'>Role</th>
                                    <th className='th-custom'>Client</th>
                                    <th className='th-custom'>Salary</th>
                                    <th className='th-custom'>Drafted By</th>
                                    <th className='th-custom'>Notes</th>
                                    <th className='th-custom'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {userdata.map((element) => {
                                    return (
                                        <>   <tr>
                                            <td className='td-custom'>{element.Role}</td>
                                            <td className='td-custom'>{element.Client}</td>
                                            <td className='td-custom'>{element.Salary}</td>
                                            <td className='td-custom'>{element.DraftedBy}</td>
                                            <td className='td-custom'>{element.Notes}</td>
                                            <td className='td-custom text-center'>
                                                <Dropdown>
                                                    <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                                        <Badge className='action-btn'>
                                                            Action
                                                        </Badge>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>

                                                        <Dropdown.Item >Submit Job</Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <NavLink to={`/edit/${element._id}`}>
                                                                Edit Resume </NavLink></Dropdown.Item>


                                                        <Dropdown.Item >Close Job</Dropdown.Item>
                                                        <Dropdown.Item onClick="">Quick  Match</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr></>
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

export default JobDescriptionTable;