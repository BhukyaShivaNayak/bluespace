import React, { useState } from 'react';
import "./index.css";
import { FaStar } from 'react-icons/fa';
import { FaEllipsisV } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

const ListOfJobs = (props) => {
    const { userdata,deletetheJob } = props;
    

    const filterUserdata = userdata.filter(user => user.StatusType === "Active");
    

    const [favoriteJobs, setFavoriteJobs] = useState({});

    const toggleFavorite = (id) => {
        setFavoriteJobs((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const allFavorited = filterUserdata.every(job => favoriteJobs[job._id]);
    const noneFavorited = filterUserdata.every(job => !favoriteJobs[job._id]);

    const sortedUserData = filterUserdata.sort((a, b) => {
        const aFavorited = favoriteJobs[a._id] ? 1 : 0;
        const bFavorited = favoriteJobs[b._id] ? 1 : 0;

        if (allFavorited || noneFavorited) {
            return a.JobID.localeCompare(b.JobID);
        }

        if (aFavorited === bFavorited) {
            return a.JobName.localeCompare(b.JobName);
        }

        return bFavorited - aFavorited;
    });

    const getInitials = (jobName) => {
        const words = jobName.split(' ');
        const initials = words.slice(0, 2).map(word => word.charAt(0).toUpperCase()).join('');
        return initials || 'NA';
    };

    const getManagerInitials = (managerName) => {
        const words = managerName.split(' ');
        const initials = words.slice(0, 2).map(word => word.charAt(0).toUpperCase()).join('');
        return initials || 'NA';
    };

    const getColorFromName = (name) => {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash += name.charCodeAt(i);
        }
        const hue = hash % 360; 
        return `hsl(${hue}, 70%, 80%)`; 
    };

    return (
        <Row>
            <div className="jobs-card col-lg-12">
                {sortedUserData.map((element) => {
                    const jobColor = getColorFromName(element.JobName);
                    const managerColor = getColorFromName(element.HiringManager);

                    return (
                        <div className='card1' key={element._id}>
                            <div className='sec-1'>
                                <div className='des-part'>
                                    <div className='job-logo' style={{ backgroundColor: jobColor }}>
                                        {getInitials(element.JobName)}
                                    </div>
                                    <div className="Info">
                                        <h1 className='job-name'>{element.JobName}</h1>
                                        <div className='within-Info'>
                                            <p>{element.Department}</p>
                                            <p className='status-part'>{element.StatusType}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='icon-part'>
                                    <FaStar
                                        size={20}
                                        color={favoriteJobs[element._id] ? "gold" : "black"}
                                        className='fav-icon'
                                        onClick={() => toggleFavorite(element._id)}
                                    />
                                    <Dropdown align="end">
                                        <Dropdown.Toggle
                                            id="dropdown-basic"
                                            className="no-arrow"
                                            style={{ border: 'none', background: 'none', padding: 0 }}
                                        >
                                            <FaEllipsisV size={20} color="black" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                           
                                            <Dropdown.Item>
                                                <NavLink to={`/edit/${element._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                    Edit Job
                                                </NavLink>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <NavLink to={`/jobprofile/${element._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                    View
                                                </NavLink>
                                            </Dropdown.Item>
                                            <Dropdown.Item>

                                                <div onClick={()=>deletetheJob(element._id)}>
                                                Close Job
                                                </div>
                                                
                                             



                                            </Dropdown.Item>
                                            
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className='sec-2'>
                                <div className='info1'>
                                    <h1 className='job-id'>Job Id</h1>
                                    <p>{element.JobID}</p>
                                </div>
                                <div className='info1'>
                                    <h1 className='opening'>Openings</h1>
                                    <p>{element.TotalOpenings}</p>
                                </div>
                                <div className='info1'>
                                    <h1 className='candidate'>Candidate</h1>
                                    <p>2</p>
                                </div>
                            </div>
              
                            <div className='sec-3'>
    <div className='info1'>
        <h1 className='expiry-date'>Expiry Date</h1>
        <p>
            {(() => {
                const date = new Date(element.ExpiryDate);
                const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with 0 if necessary
                const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad
                const year = date.getFullYear(); // Get full year
                return `${day}-${month}-${year}`; // Return formatted date
            })()}
        </p>
    </div>
    <div className='info3'>
        <h1 className='Hired'>Hired</h1>
        <p>0</p>
    </div>
</div>

                            <div className="tm-info">
                                <p style={{ color: "lawngreen" }}>HM</p>
                                <div className='tm-bg' style={{ backgroundColor: managerColor }}>
                                    {getManagerInitials(element.HiringManager)}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Row>
    );
}

export default ListOfJobs;