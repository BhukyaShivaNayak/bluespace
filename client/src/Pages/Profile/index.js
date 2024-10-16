// // import React, { useState, useEffect } from 'react'
// // import Card from 'react-bootstrap/Card'
// // import Row from 'react-bootstrap/esm/Row'

// // import { useParams } from 'react-router-dom'

// // import Spiner from '../../Components/Spiner';

// // import { getsingleJobfunc } from '../../Services/Apis'

// // import "./index.css"
// // const Profile = () => {
// //     const [jobProfile, setJobProfile] = useState({});
// //     const [showspin, setShowSpin] = useState(true);

// //     const { id } = useParams()
// //     console.log(id)

// //     const jobProfileGet = async () => {
// //         const response = await getsingleJobfunc(id)

// //         if (response.status === 200) {
// //             setJobProfile(response.data)
// //         }else{
// //             console.log("error")
// //         }
// //         console.log(response)
// //     }

// //     // useEffect(() => {
// //     //     jobProfileGet();
// //     //     setTimeout(() => {
// //     //         setShowSpin(false)
// //     //     }, 1200)
// //     // }, [id])

// //     useEffect(() => {
// //         jobProfileGet();

// //         setTimeout(() => {
// //             setShowSpin(false);
// //         }, 1200);
// //     }, [id, jobProfileGet]); // Add jobProfileGet to the dependency array


// //     return (<>

// //         {showspin ? <Spiner /> : <Card>
// //             <Card.Body>
// //                 <Row>

// //                 </Row>
// //                 <div className='text-center'>
// //                 <p>{jobProfile.Jname}</p>
// //                 <p>{jobProfile.Lname}</p>
// //                 <p>{jobProfile.Cname}</p>
// //                 <p>{jobProfile.Rname}</p>
// //                 <p>{jobProfile.Hname}</p>
// //                 <p>{jobProfile.Role}</p>
// //                 <p>{jobProfile.Client}</p>
// //                 <p>{jobProfile.Salary}</p>
// //                 <p>{jobProfile.DraftedBy}</p>
// //                 <p>{jobProfile.Note}</p>
// //                 <p>{jobProfile.Industry}</p>
// //                 <p>{jobProfile.JobDes}</p>
// //                 <p>{jobProfile.JobID}</p>
// //                 <p>{jobProfile.JobName}</p>

// //                 <p>{jobProfile.OpeningDate}</p>
// //                 <p>{jobProfile.ExpiryDate}</p>
// //                 <p>{jobProfile.TotalOpenings}</p>
// //                 <p>{jobProfile.Experience}</p>
// //                 <p>{jobProfile.WorkplaceType}</p>
// //                 <p>{jobProfile.EmploymentType}</p>
// //                 <p>{jobProfile.SeniorityLevelType}</p>
// //                 <p>{jobProfile.HiringManager}</p>
// //                 <p>{jobProfile.JobPostType}</p>
// //                 <p>{jobProfile.JobTitle}</p>
// //                 <p>{jobProfile.JobType}</p>
// //                 <p>{jobProfile.StatusType}</p>
// //                 <p>{jobProfile.Priority}</p>
// //                 <p>{jobProfile.Location}</p>
// //                 <p>{jobProfile.Department}</p>
// //                 <p>{jobProfile.SalaryType}</p>
// //                 </div>
// //             </Card.Body>

// //             </Card>}

// //     </>

// //     )
// // }


// // export default Profile  


// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/esm/Row';
// import { useParams } from 'react-router-dom';
// import Spiner from '../../Components/Spiner';
// import { getsingleJobfunc } from '../../Services/Apis';
// import "./index.css";

// const Profile = () => {
//     const [jobProfile, setJobProfile] = useState({});
//     const [showspin, setShowSpin] = useState(true);
//     const { id } = useParams();

//     useEffect(() => {
//         // Define the async function inside the useEffect
//         const jobProfileGet = async () => {
//             const response = await getsingleJobfunc(id);
//             if (response.status === 200) {
//                 setJobProfile(response.data);
//             } else {
//                 console.log("Error fetching job profile");
//             }
//             console.log(response);
//         };

//         jobProfileGet(); // Call the function inside useEffect

//         setTimeout(() => {
//             setShowSpin(false);
//         }, 1200);
//     }, [id]); // Only `id` as dependency

//     return (
//         <>
//             {showspin ? <Spiner /> : 
//                 <Card>
//                     <Card.Body>
//                         <Row></Row>
//                         <div className='text-center'>
//                             <p>{jobProfile.Jname}</p>
//                             <p>{jobProfile.Lname}</p>
//                             <p>{jobProfile.Cname}</p>
//                             <p>{jobProfile.Rname}</p>
//                             <p>{jobProfile.Hname}</p>
//                             <p>{jobProfile.Role}</p>
//                             <p>{jobProfile.Client}</p>
//                             <p>{jobProfile.Salary}</p>
//                             <p>{jobProfile.DraftedBy}</p>
//                             <p>{jobProfile.Note}</p>
//                             <p>{jobProfile.Industry}</p>
//                             <p>{jobProfile.JobDes}</p>
//                             <p>{jobProfile.JobID}</p>
//                             <p>{jobProfile.JobName}</p>
//                             <p>{jobProfile.OpeningDate}</p>
//                             <p>{jobProfile.ExpiryDate}</p>
//                             <p>{jobProfile.TotalOpenings}</p>
//                             <p>{jobProfile.Experience}</p>
//                             <p>{jobProfile.WorkplaceType}</p>
//                             <p>{jobProfile.EmploymentType}</p>
//                             <p>{jobProfile.SeniorityLevelType}</p>
//                             <p>{jobProfile.HiringManager}</p>
//                             <p>{jobProfile.JobPostType}</p>
//                             <p>{jobProfile.JobTitle}</p>
//                             <p>{jobProfile.JobType}</p>
//                             <p>{jobProfile.StatusType}</p>
//                             <p>{jobProfile.Priority}</p>
//                             <p>{jobProfile.Location}</p>
//                             <p>{jobProfile.Department}</p>
//                             <p>{jobProfile.SalaryType}</p>
//                         </div>
//                     </Card.Body>
//                 </Card>
//             }
//         </>
//     );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import { useParams } from 'react-router-dom';
import Spiner from '../../Components/Spiner';
import { getsingleJobfunc } from '../../Services/Apis';
import "./index.css";






import DOMPurify from 'dompurify';




const Profile = () => {
    const [jobProfile, setJobProfile] = useState({});
    const [showspin, setShowSpin] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        // Define the async function to fetch job data
        const jobProfileGet = async () => {
            try {
                const response = await getsingleJobfunc(id);

                // Check if the response status is OK (200)
                if (response.status === 200) {
                    setJobProfile(response.data);  // Set the job profile data
                } else {
                    console.error("Job not found or server error");
                }
            } catch (error) {
                console.error("Error fetching job profile:", error);
            }
        };

        // Call the function to fetch the job profile
        jobProfileGet();

        // Hide spinner after 1.2 seconds
        setTimeout(() => {
            setShowSpin(false);
        }, 1200);
    }, [id]); // Dependency on job ID



    return (
        <>
            {showspin ? <Spiner /> :
                <Card>
                    <Card.Body>
                        <Row></Row>
                        <div className='text-center'>
                            <p>{jobProfile.Jname}</p>
                            <p>{jobProfile.Lname}</p>
                            <p>{jobProfile.Cname}</p>
                            <p>{jobProfile.Rname}</p>
                            <p>{jobProfile.Hname}</p>
                            <p>{jobProfile.Role}</p>
                            <p>{jobProfile.Client}</p>
                            <p>{jobProfile.Salary}</p>
                            <p>{jobProfile.DraftedBy}</p>
                            <p>{jobProfile.Note}</p>
                            <p>{jobProfile.Industry}</p>
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(jobProfile.JobDes) }} />



                            <p>{jobProfile.JobID}</p>
                            <p>{jobProfile.JobName}</p>
                            <p>{jobProfile.OpeningDate}</p>
                            <p>{jobProfile.ExpiryDate}</p>
                            <p>{jobProfile.TotalOpenings}</p>
                            <p>{jobProfile.Experience}</p>
                            <p>{jobProfile.WorkplaceType}</p>
                            <p>{jobProfile.EmploymentType}</p>
                            <p>{jobProfile.SeniorityLevelType}</p>
                            <p>{jobProfile.HiringManager}</p>
                            <p>{jobProfile.JobPostType}</p>
                            <p>{jobProfile.JobTitle}</p>
                            <p>{jobProfile.JobType}</p>
                            <p>{jobProfile.StatusType}</p>
                            <p>{jobProfile.Priority}</p>
                            <p>{jobProfile.Location}</p>
                            <p>{jobProfile.Department}</p>
                            <p>{jobProfile.SalaryType}</p>
                        </div>
                    </Card.Body>
                </Card>
            }
        </>
    );
};

export default Profile;