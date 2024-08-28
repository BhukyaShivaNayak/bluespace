import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Table1 from './Table1';
import CandidtaesTable from './Table2';
import './home.css';

class Home extends Component {
    state = {
        isActive1: false,
        isActive2: false,
        isActive3: false,
        showTable1: true, // Default to showing Table1
        showCandidtaesTable: false // Default to not showing CandidtaesTable
    };

    onToggleIsActive1 = () => {
        this.setState({
            isActive1: !this.state.isActive1,
            showTable1: !this.state.isActive1, // Show Table1 when expanded
            showCandidtaesTable: false // Hide CandidtaesTable
        });
    }

    onToggleIsActive2 = () => {
        this.setState({
            isActive2: !this.state.isActive2,
            showCandidtaesTable: !this.state.isActive2, // Show CandidtaesTable when expanded
            showTable1: false // Hide Table1
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
                    <li>Active Jobs</li>
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
        const { showTable1, showCandidtaesTable } = this.state;

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
                    <Dashboard />
                    {showTable1 && <Table1 />}
                    {showCandidtaesTable && <CandidtaesTable />}
                </div>
            </div>
        );
    }
}

export default Home;
