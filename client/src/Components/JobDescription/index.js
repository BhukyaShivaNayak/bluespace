import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { usergetfunc } from '../../Services/Apis';
//import Tables from '../Tables';
import JobDescriptionTable from '../JobDescriptionTable'
import Spiner from '../Spiner';


import './index.css';

const JobDescription = () => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const [userdata, setUserData] = useState([]);
    const [showspin, setShowSpin] = useState(true)



    const navigate = useNavigate();

    const addUser = () => {
        navigate("/register");
    }

    const userGet = async () => {
        const response = await usergetfunc();
        if (response.status === 200) {
            setUserData(response.data);


        } else {
            console.log("error for get user data")
        }
    }


    useEffect(() => {
        userGet();
        setTimeout(() => {
            setShowSpin(false)
        }, 1200)
    }, [])
    const onToggleIsActive1 = () => {
        setIsActive1(prevState => !prevState);
    }

    const onToggleIsActive2 = () => {
        setIsActive2(prevState => !prevState);
    }

    const onToggleIsActive3 = () => {
        setIsActive3(prevState => !prevState);
    }

    const renderDropdown1 = () => {
        if (isActive1) {
            return (
                <ul className="drop-down">
                    <li><Link className="nav-link" to="/active-jobs">Active Jobs</Link></li>
                    <li><Link className="nav-link" to="/closed-jobs">Closed Jobs</Link></li>
                    <li><Link className="nav-link" to="/job-description">Job Description</Link> </li>
                </ul>
            );
        }
        return null;
    }

    const renderDropdown2 = () => {
        if (isActive2) {
            return (
                <ul className="drop-down">
                    <li>Active Candidates</li>
                    <li>Pipeline</li>
                    <li>Database</li>
                    <li>Add New Candidates</li>
                </ul>
            );
        }
        return null;
    }

    const renderDropdown3 = () => {
        if (isActive3) {
            return (
                <ul className="drop-down">
                    <li>Ongoing</li>
                    <li>Upcoming</li>
                    <li>Schedule an interview</li>
                </ul>
            );
        }
        return null;
    }

    const renderImage1 = () => {
        const image = isActive1
            ? 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724136296/icons8-chevron-up-30_i8wku1.png'
            : 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724130835/icons8-chevron-down-30_xlawvm.png';
        const altText = isActive1 ? 'up' : 'down';
        return (
            <button type="button" onClick={onToggleIsActive1} className="icon-button">
                <img src={image} alt={altText} className="image" />
            </button>
        );
    }

    const renderImage2 = () => {
        const image = isActive2
            ? 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724136296/icons8-chevron-up-30_i8wku1.png'
            : 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724130835/icons8-chevron-down-30_xlawvm.png';
        const altText = isActive2 ? 'up' : 'down';
        return (
            <button type="button" onClick={onToggleIsActive2} className="icon-button">
                <img src={image} alt={altText} className="image" />
            </button>
        );
    }

    const renderImage3 = () => {
        const image = isActive3
            ? 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724136296/icons8-chevron-up-30_i8wku1.png'
            : 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724130835/icons8-chevron-down-30_xlawvm.png';
        const altText = isActive3 ? 'up' : 'down';
        return (
            <button type="button" onClick={onToggleIsActive3} className="icon-button">
                <img src={image} alt={altText} className="image" />
            </button>
        );
    }
    console.log(userdata)

    return (
        <>

            <div className="main-container">
                <div className="drawer">
                    <div className='dash-title'>
                        <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724144429/icons8-folder-26_yxc9uj.png" alt="" className='folder-icon' />
                        <h1 className="dashboard-title">Dashboard</h1>
                    </div>
                    <ul className="container">
                        <li className="list-item">
                            <div className="icon-title">
                                <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724130527/icons8-sheets-32_xfhgub.png" alt="" className="icon1" />
                                <p className="item-name">Jobs</p>
                            </div>
                            {renderImage1()}
                        </li>
                        {renderDropdown1()}
                        <li className="list-item">
                            <div className="icon-title">
                                <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724825111/Icon_3_orol4x.png" alt="" className="icon1" />
                                <p className="item-name">Candidates</p>
                            </div>
                            {renderImage2()}
                        </li>
                        {renderDropdown2()}
                        <li className="list-item">
                            <div className="icon-title">
                                <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724138369/icons8-tv-48_zn63ze.png" alt="" className="icon1" />
                                <p className="item-name">Interview</p>
                            </div>
                            {renderImage3()}
                        </li>
                        {renderDropdown3()}
                        <li className="list-item">
                            <div className="icon-title">
                                <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724138702/icons8-user-account-48_rwgenl.png" alt="" className="icon1" />
                                <p className="item-name">Vendor</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='non-drawer'>



                    {
                        showspin ? <Spiner /> : <JobDescriptionTable userdata={userdata}

                        />
                    }

                </div>
            </div>
        </>
    );
};

export default JobDescription;
