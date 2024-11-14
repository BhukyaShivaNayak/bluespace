import React, { useState } from 'react';
import './index.css';
import Select from 'react-select';
import { Form } from 'react-bootstrap';

const Home2 = () => {

    const [inputdata, setInputData] = useState({
        DegreeType: "Degree",
        miniSkill: "Python",
        CheckboxClick: false,
        CheckboxClick1: false,
        minimumYears: "1",
        custmizationQuestion: "",
    });

    const [statusOfCancelIcon, setStatusOfCancelIcon] = useState(false);
    const [statusOfCancelIcon1, setStatusOfCancelIcon1] = useState(false);
    const [statusOfCancelIcon2, setStatusOfCancelIcon2] = useState(false);

    const [showEducation, setShowEducation] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showCustomQuestions, setShowCustomQuestions] = useState(false);

    // Toggle functions for the sections
    const toggleEducation = () => setShowEducation(prevState => !prevState);
    const toggleSkills = () => setShowSkills(prevState => !prevState);
    const toggleCustomQuestions = () => setShowCustomQuestions(prevState => !prevState);

    // Toggle Checkbox
    const toggleCheckBox = () => setInputData(prev => ({ ...prev, CheckboxClick: !prev.CheckboxClick }));
    const toggleCheckBox1 = () => setInputData(prev => ({ ...prev, CheckboxClick1: !prev.CheckboxClick1 }));

    // Toggles for Cancel Icon
    const onToggleActiveQuestion1 = () => setStatusOfCancelIcon(prevState => !prevState);
    const onToggleActiveQuestion2 = () => setStatusOfCancelIcon1(prevState => !prevState);
    const onToggleActiveQuestion3 = () => setStatusOfCancelIcon2(prevState => !prevState);

    const handleSelectChange = (name, value) => {
        setInputData(prev => ({ ...prev, [name]: value }));
    };

    const handleInputChange = (e) => {
        setInputData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const DegreeType = [
        { value: "Degree", label: "Degree" },
        { value: "Master", label: "Master" }
    ];

    const miniSkill = [
        { value: "Python", label: "Python" },
        { value: "JavaScript", label: "JavaScript" },
        { value: "Java", label: "Java" },
        { value: "C", label: "C" },
        { value: "C++", label: "C++" },
        { value: "Ruby", label: "Ruby" },
        { value: "PHP", label: "PHP" },
        { value: "Go", label: "Go" },
        { value: "Swift", label: "Swift" },
        { value: "Kotlin", label: "Kotlin" },
        { value: "Rust", label: "Rust" },
        { value: "TypeScript", label: "TypeScript" },
        { value: "R", label: "R" },
        { value: "SQL", label: "SQL" },
        { value: "MATLAB", label: "MATLAB" }
    ];

    return (
        <div className='screening-container'>
            <div className="adding-screeningcontainer">
                <h1 className="screening-title">Step 3: Adding screening questions</h1>
                <h3 className="screening-subtitle">Adding Screening Questions</h3>
                <p className="screening-description">
                    By using screening questions your job post is highlighted to matching members. Screened applicants are also highlighted to ensure qualified candidates are not missed, and applicants are sorted based on qualifications met. We recommend adding one or more questions.
                </p>

                <div className="question-container">

                    {/* Education Section */}
                    {showEducation && (
                        <div>
                            <div className="addingq1-sec">
                                <h1 className="q1-titel">Have you completed the following level of education?</h1>
                                <button className="icon-btn" onClick={onToggleActiveQuestion1}>
                                    {statusOfCancelIcon ? (
                                        <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730956106/icons8-dropdown-50_1_hwzhte.png" alt="Down Arrow" className="cancel-icon" />
                                    ) : (
                                        <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730883253/icons8-cancel-50_1_-removebg-preview_ivhaoc.png" alt="Cancel Icon" className="cancel-icon" />
                                    )}
                                </button>
                            </div>

                            {statusOfCancelIcon && (
                                <div className="q1-values">
                                    <Form.Group className="inputs mb-3 col-lg-6">
                                        <Form.Label>Degree *</Form.Label>
                                        <Select
                                            options={DegreeType}
                                            value={DegreeType.find(option => option.value === inputdata.DegreeType)}
                                            onChange={(e) => handleSelectChange('DegreeType', e ? e.value : '')}
                                        />
                                    </Form.Group>

                                    <div className="check-item">
                                        <input
                                            onChange={toggleCheckBox}
                                            checked={inputdata.CheckboxClick}
                                            type="checkbox"
                                            className="checkbox-input"
                                        />
                                        <label>Must Have Skill</label>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Skills Section */}
                    {showSkills && (
                        <div>
                            <div className="addingq1-sec">
                                <h1 className="q1-titel">How many years of work experience do you have with [Skills]?</h1>
                                <button onClick={onToggleActiveQuestion2}>
                                    {statusOfCancelIcon1 ? (
                                        <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730956106/icons8-dropdown-50_1_hwzhte.png" alt="Down Arrow" className="cancel-icon" />
                                    ) : (
                                        <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730883253/icons8-cancel-50_1_-removebg-preview_ivhaoc.png" alt="Cancel Icon" className="cancel-icon" />
                                    )}
                                </button>
                            </div>

                            {statusOfCancelIcon1 && (
                                <div className="q1-values">
                                    <Form.Group className="inputs mb-3 col-lg-6">
                                        <Form.Label>Skill *</Form.Label>
                                        <Select
                                            options={miniSkill}
                                            value={miniSkill.find(option => option.value === inputdata.miniSkill)}
                                            onChange={(e) => handleSelectChange('miniSkill', e ? e.value : '')}
                                        />
                                    </Form.Group>

                                    <div>
                                        <label>Ideal Answer</label><br />
                                        <div className="input-val">
                                            <input
                                                name="minimumYears"
                                                value={inputdata.minimumYears}
                                                onChange={handleInputChange}
                                                type="number"
                                                className="min-input"
                                            />
                                            <p>Minimum</p>
                                        </div>
                                    </div>

                                    <div className="check-item">
                                        <input
                                            type="checkbox"
                                            checked={inputdata.CheckboxClick1}
                                            onChange={toggleCheckBox1}
                                            className="checkbox-input"
                                        />
                                        <label>Must Have Skill</label>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Custom Questions Section */}
                    {showCustomQuestions && (
                        <div>
                            <div className="addingq1-sec">
                                <h1 className="q1-titel">Write a custom screening question.</h1>
                                <button onClick={onToggleActiveQuestion3}>
                                    {statusOfCancelIcon2 ? (
                                        <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730956106/icons8-dropdown-50_1_hwzhte.png" alt="Down Arrow" className="cancel-icon" />
                                    ) : (
                                        <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1730883253/icons8-cancel-50_1_-removebg-preview_ivhaoc.png" alt="Cancel Icon" className="cancel-icon" />
                                    )}
                                </button>
                            </div>

                            {statusOfCancelIcon2 && (
                                <div>
                                    <label>Question *</label><br />
                                    <textarea
                                        name="custmizationQuestion"
                                        value={inputdata.custmizationQuestion}
                                        onChange={handleInputChange}
                                        placeholder="Ask the question Here ..."
                                        rows="4"
                                        cols="200"
                                    />
                                </div>
                            )}
                        </div>
                    )}

                </div>

                <div className="select-options">
                    <button onClick={toggleEducation}>+ Education</button>
                    <button onClick={toggleSkills}>+ Expected Skills</button>
                    <button onClick={toggleCustomQuestions}>+ Custom Questions</button>
                </div>
            </div>
        </div>
    );
}

export default Home2;
