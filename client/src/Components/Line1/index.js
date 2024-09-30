import "./index.css";
import { Component } from "react";

class Line1 extends Component {
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
        );
    }
}

export default Line1;
