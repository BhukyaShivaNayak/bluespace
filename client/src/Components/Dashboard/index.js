import './index.css'

import Notepad from '../Notepad'

//import Line1 from '../Line1'
import { Component } from 'react'


class Dashboard extends Component {
    state = { job: true, candidate: false };


    onJob = () => {
        this.setState({ job: true, candidate: false });
    }

    onCandidate = () => {
        this.setState({ candidate: true, job: false });
    }

    render() {
        const { job, candidate } = this.state;
        return (
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
                    <div className='botton-title'>
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

        )
    }
}

export default Dashboard