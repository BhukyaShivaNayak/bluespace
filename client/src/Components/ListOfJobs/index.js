import React from 'react'
import "./index.css"
import { FaStar } from 'react-icons/fa';
import { FaEllipsisV } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';

const ListOfJobs=(props)=> {
    const { userdata } = props;
    console.log(userdata);

    return (
        <>
       
            {/* <div>ListOfJobs</div>
            <div className="jobs-card">
                <div className='card1'>
                    <div className='sec-1'>
                        <div className='des-part'>
                        <div className='job-logo'>DM</div>
                        <div className="Info" >
                            <h1 className='job-name'>Job Name</h1>
                            <div className='within-Info'>
                                <p>Department</p>
                                <p className='status-part'>Status</p>
                            </div>
                        </div>
                        </div>
                       <div className='icon-part'>
                       <FaStar size={20} color="gold" className='fav-icon' />
                       <FaEllipsisV size={20} color="black"/>
                       </div>
                        
                      
                    </div>
                    <div className='sec-2'>
                        <div className='info1'>
                            <h1 className='job-id'>Job Id</h1>
                            <p>001</p>
                        </div>

                        <div className='info1'>
                            <h1 className='opening'>Openings</h1>
                            <p>4</p>
                        </div>
                        <div className='info1'>
                            <h1 className='candidate'>Candidate</h1>
                            <p>2</p>
                        </div>
                    </div>
                    <div className='sec-3'>
                        <div className='info1'>
                            <h1  className='expiry-date'>Expiry Date</h1>
                            <p>23 May,2023</p>
                        </div>
                        <div className='info3'>
                            <h1 className='Hired'>Hired</h1>
                            <p>0</p>
                        </div>
                    </div>
                    <div className="tm-info">
                        <p style={{color:"lawngreen"}}>HM</p>
                        <div className='tm-bg'>TP</div>
                    </div>
                </div>

            </div> */}
      <Row>

      <div className="jobs-card col-lg-4'">
            
            {userdata.map((element) => (
            

                                // <tr key={element._id}>
                                //     <td className='td-custom'>{element.Jname}</td>
                                //     <td className='td-custom'>{element.Lname}</td>
                                //     <td className='td-custom'>{element.Cname}</td>
                                //     <td className='td-custom'>{element.Rname}</td>
                                //     <td className='td-custom'>{element.Hname}</td>
                                //     <td className='td-custom'>{element.WorkplaceType}</td>
                                //     <td className='td-custom'>{element.EmploymentType}</td>
                                //     <td className='td-custom'>{element.SeniorityLevelType}</td>
                                //     <td className='td-custom'>{element.JobDes}</td>
                                //     <td className='td-custom'>
                                //         <Dropdown>
                                //             <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                //                 Action
                                //             </Dropdown.Toggle>
                                //             <Dropdown.Menu>
                                //                 <Dropdown.Item>Submit Job</Dropdown.Item>
                                //                 <Dropdown.Item>
                                //                     <NavLink to={`/edit/${element._id}`}>
                                //                         Edit Job
                                //                     </NavLink>
                                //                 </Dropdown.Item>
                                //                 <Dropdown.Item>Close Job</Dropdown.Item>
                                //                 <Dropdown.Item onClick="">Quick Match</Dropdown.Item>
                                //             </Dropdown.Menu>
                                //         </Dropdown>
                                //     </td>
                                // </tr>
                            
                                <div className='card1'>
                                    <div className='sec-1'>
                                        <div className='des-part'>
                                        <div className='job-logo'>DM</div>
                                        <div className="Info" >
                                            <h1 className='job-name'> {element.JobName
                                            }</h1>
                                            <div className='within-Info'>
                                                <p>{element.Department}</p>
                                                <p className='status-part'>{element.StatusType
                                                }</p>
                                            </div>
                                        </div>
                                        </div>
                                       <div className='icon-part'>
                                       <FaStar size={20} color="gold" className='fav-icon' />
                                       <FaEllipsisV size={20} color="black"/>
                                       </div>
                                        
                                      
                                    </div>
                                    <div className='sec-2'>
                                        <div className='info1'>
                                            <h1 className='job-id'>Job Id</h1>
                                            <p>{element.JobID
                                            }</p>
                                        </div>
                
                                        <div className='info1'>
                                            <h1 className='opening'>Openings</h1>
                                            <p>{element.TotalOpenings
                                            }</p>
                                        </div>
                                        <div className='info1'>
                                            <h1 className='candidate'>Candidate</h1>
                                            <p>2</p>
                                        </div>
                                    </div>
                                    <div className='sec-3'>
                                        <div className='info1'>
                                            <h1  className='expiry-date'>Expiry Date</h1>
                                            <p>{element.ExpiryDate
                                            }</p>
                                        </div>
                                        <div className='info3'>
                                            <h1 className='Hired'>Hired</h1>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div className="tm-info">
                                        <p style={{color:"lawngreen"}}>HM</p>
                                        <div className='tm-bg'>TP</div>
                                    </div>
                                </div>
                            
                            ))}
             
       
            </div>
            </Row>
        </>
    )
}

export default ListOfJobs