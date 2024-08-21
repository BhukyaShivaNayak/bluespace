import './index.css'

const Dashboard=()=>(
    <div className="dashboard-container">
        <div className="top-section">
            <div className="card">
                    <div className='option1'>
                      <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724130527/icons8-sheets-32_xfhgub.png" alt="" className='icon-logo'/>
                      <p>New Vacancy</p>
                    </div>
                    <div className='option2'>
                    <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724151431/user-plus-02_if1ohy.png" alt="" className='icon-logo'/>
                    <p>Add New Candidates</p>
                    </div>
                    <div className='option3'>
                    <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724148359/icons8-calendar-24_uurxqa.png" alt="" className='icon-logo'/>
                    <p>New Interview</p>
                    </div>
                    <div className='option4'>
                    <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724148463/icons8-view-24_xvurs8.png" alt="" className='icon-logo'/>
                    <p>Advanced Search</p>
                    </div>
                    
                    
            </div>
            <div className="notepad">
                <p>Bluespace note</p>
                <hr/>
            </div>
        </div>
    </div>

)

export default Dashboard