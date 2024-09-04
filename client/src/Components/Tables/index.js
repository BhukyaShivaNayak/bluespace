import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
//import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import "./index.css";

const Tables = () => {
    const [setSort] = useState("new");

    return (
        <>
            <div className='containers'>
                <Row>
                    <div className="col mt-2">

                        <Table className='table-custom w-70' responsive="lg">
                            <thead className='thead-secondary'>
                                <tr className='table-secondary'>
                                    <th className='th-custom'>Job Title</th>
                                    <th className='th-custom'>Location</th>
                                    <th className='th-custom'>Compensation</th>
                                    <th className='th-custom'>Resume In Progress</th>
                                    <th className='th-custom'>Hires Required</th>
                                    <th className='th-custom'></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='td-custom'>Java Developer</td>
                                    <td className='td-custom'>Hyderabad, TG, India</td>
                                    <td className='td-custom'>20 LPA to 25 LPA</td>
                                    <td className='td-custom'>5</td>
                                    <td className='td-custom'>3</td>
                                    <td className='td-custom text-center'>
                                        <Dropdown>
                                            <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                                <Badge >
                                                    Action
                                                </Badge>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => setSort("")}>Submit Resume</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSort("")}>Edit Job</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSort("")}>Close Job</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSort("")}>Quick  Match</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='td-custom'>Java Developer</td>
                                    <td className='td-custom'>Hyderabad, TG, India</td>
                                    <td className='td-custom'>20 LPA to 25 LPA</td>
                                    <td className='td-custom'>5</td>
                                    <td className='td-custom'>3</td>
                                    <td className='td-custom text-center'>
                                        <Dropdown>
                                            <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                                <Badge >
                                                    Action
                                                </Badge>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => setSort("")}>Submit Resume</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSort("")}>Edit Job</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSort("")}>Close Job</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSort("")}>Quick  Match</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                </Row>
            </div>
        </>
    );
}

export default Tables;
