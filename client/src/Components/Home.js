import React, { Component } from 'react';
//import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import Table1 from './Table1';
import Notepad from './Notepad'
import CandidtaesTable from './Table2';
import './home.css';

class Home extends Component {
    state = {
        isActive1: false,
        isActive2: false,
        isActive3: false,
        showTable1: true,
        showCandidtaesTable: false,
        job: true, candidate: false
    };

    onJob = () => {
        this.setState({
            job: true, candidate: false, showTable1: !this.state.isActive1,
            showCandidtaesTable: false
        });
    }

    onCandidate = () => {
        this.setState({
            candidate: true, job: false, showCandidtaesTable: !this.state.isActive2,
            showTable1: false
        });
    }


    onToggleIsActive1 = () => {
        this.setState({
            isActive1: !this.state.isActive1,

        });
    }

    onToggleIsActive2 = () => {
        this.setState({
            isActive2: !this.state.isActive2,

        });
    }

    onToggleIsActive3 = () => {
        this.setState(prevState => ({
            isActive3: !prevState.isActive3
        }));
    }

    renderDropdown1 = () => {
        const { isActive1 } = this.state;
        if (isActive1) {
            return (
                <ul className="drop-down">
                    <li><Link className="nav-link" to="/active-jobs">Active Jobs</Link></li>
                    <li className='highlight'>Closed Jobs</li>
                    <li>Job Description</li>
                </ul>
            );
        }
        return null;
    }

    renderDropdown2 = () => {
        const { isActive2 } = this.state;
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

    renderDropdown3 = () => {
        const { isActive3 } = this.state;
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

    renderImage1 = () => {
        const { isActive1 } = this.state;
        const image = isActive1
            ? 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724136296/icons8-chevron-up-30_i8wku1.png'
            : 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724130835/icons8-chevron-down-30_xlawvm.png';
        const altText = isActive1 ? 'up' : 'down';
        return (
            <button type="button" onClick={this.onToggleIsActive1} className="icon-button">
                <img src={image} alt={altText} className="image" />
            </button>
        );
    }

    renderImage2 = () => {
        const { isActive2 } = this.state;
        const image = isActive2
            ? 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724136296/icons8-chevron-up-30_i8wku1.png'
            : 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724130835/icons8-chevron-down-30_xlawvm.png';
        const altText = isActive2 ? 'up' : 'down';
        return (
            <button type="button" onClick={this.onToggleIsActive2} className="icon-button">
                <img src={image} alt={altText} className="image" />
            </button>
        );
    }

    renderImage3 = () => {
        const { isActive3 } = this.state;
        const image = isActive3
            ? 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724136296/icons8-chevron-up-30_i8wku1.png'
            : 'https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724130835/icons8-chevron-down-30_xlawvm.png';
        const altText = isActive3 ? 'up' : 'down';
        return (
            <button type="button" onClick={this.onToggleIsActive3} className="icon-button">
                <img src={image} alt={altText} className="image" />
            </button>
        );
    }

    render() {
        const { showTable1, showCandidtaesTable, job, candidate } = this.state;

        return (
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
                            {this.renderImage1()}
                        </li>
                        {this.renderDropdown1()}
                        <li className="list-item">
                            <div className="icon-title">
                                <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724825111/Icon_3_orol4x.png" alt="" className="icon1" />
                                <p className="item-name">Candidates</p>
                            </div>
                            {this.renderImage2()}
                        </li>
                        {this.renderDropdown2()}
                        <li className="list-item">
                            <div className="icon-title">
                                <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724138369/icons8-tv-48_zn63ze.png" alt="" className="icon1" />
                                <p className="item-name">Interview</p>
                            </div>
                            {this.renderImage3()}
                        </li>
                        {this.renderDropdown3()}
                        <li className="list-item">
                            <div className="icon-title">
                                <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724138702/icons8-user-account-48_rwgenl.png" alt="" className="icon1" />
                                <p className="item-name">Vendor</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='non-drawer'>
                    <div className="dashboard-container">
                        <div className="top-section">
                            <div className="card-it">
                                <div className='option1'>
                                    <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724130527/icons8-sheets-32_xfhgub.png" alt="" className='icon-logo' />
                                    <p>New Vacancy</p>
                                </div>
                                <div className='option2'>
                                    <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724151431/user-plus-02_if1ohy.png" alt="" className='icon-logo' />
                                    <p>Add New Candidates</p>
                                </div>
                                <div className='option3'>
                                    <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724148359/icons8-calendar-24_uurxqa.png" alt="" className='icon-logo' />
                                    <p>New Interview</p>
                                </div>
                                <div className='option4'>
                                    <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724148463/icons8-view-24_xvurs8.png" alt="" className='icon-logo' />
                                    <p>Advanced Search</p>
                                </div>


                            </div>

                            <Notepad />
                        </div>
                        <div className='bottom-section'>
                            {/*<Line1 />*/}
                            <div>
                                <div className='botton-title'>
                                    {job && <h1 className='job-live'>Job Live</h1>}
                                    {candidate && <h1 className='job-live'>Candidates Live</h1>}
                                    <div className='tab-section'>
                                        <div className={`job-tab ${job ? 'active' : ''}`} onClick={this.onJob}>
                                            {job ? <img
                                                src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724824186/Icon_1_xg8tsv.png"
                                                alt="Jobs Icon"
                                                className='jobs-icon m-1'
                                            /> : <img
                                                src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724130527/icons8-sheets-32_xfhgub.png"
                                                alt="Jobs Icon"
                                                className='jobs-icon m-1'
                                            />}
                                            <p className={`job-heading m-1 ${job ? 'active' : ''}`}>Jobs</p>
                                            <p className='job-count m-1'>0</p>
                                        </div>
                                        <div className={`candidates-tab ${candidate ? 'active' : ''}`} onClick={this.onCandidate}>

                                            {candidate ? <img
                                                src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724578914/user-03_frppec.png"
                                                alt="Jobs Icon"
                                                className='jobs-icon m-1'
                                            /> : <img
                                                src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724579028/user-03_1_wqw1yx.png"
                                                alt="Jobs Icon"
                                                className='jobs-icon m-1'
                                            />}
                                            <p className={`candidate-heading m-1 ${candidate ? 'active' : ''}`}>Candidates</p>
                                            <p className='candidate-count m-1'>12</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    {showTable1 && <Table1 />}
                    {showCandidtaesTable && <CandidtaesTable />}
                </div>
            </div>
        );
    }
}

export default Home;