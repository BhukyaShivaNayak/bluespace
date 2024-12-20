
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const Notepad = () => {
    const [title, setTitle] = useState(''); // State for the task title
    const [description, setDescription] = useState(''); // State for the description/subtasks
    const [userdata, setUserdata] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            return savedTasks;
        } catch (error) {
            console.error('Failed to load tasks from localStorage:', error);
            return [];
        }
    });
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [bgColor, setBgColor] = useState('#ffffff');
    const [fontSize, setFontSize] = useState('16px');
    const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

    useEffect(() => {
        getUser();
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:6007/login/sucess", { withCredentials: true });
            const firstName = response.data.user.displayName.split(' ')[0];
            setUserdata(firstName);
        } catch (error) {
            console.log("error", error);
        }
    };

    const addTask = () => {
        if (title.trim() === '' || description.trim() === '') return;

        const subtasks = description.trim().split('\n').filter(line => line.trim() !== '');

        const newTask = {
            title: title.trim(),
            tasks: subtasks, 
            candidateName: userdata,
            backgroundColor: getRandomLightColor()
        };

        setTasks([...tasks, newTask]);
        setTitle(''); 
        setDescription(''); 
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const getRandomLightColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b}, 0.2)`;
    };

   
    const filteredTasks = tasks.filter(task => {
        const searchLower = searchQuery.toLowerCase();
        
        
        const isTitleMatch = task.title.toLowerCase().includes(searchLower);

        
        const isSubtaskMatch = task.tasks.some(subtask => 
            subtask.toLowerCase().includes(searchLower)
        );

        
        return isTitleMatch || isSubtaskMatch;
    });

    return (
        <div className="notepad" style={{ backgroundColor: bgColor }}>
            <p className="note-title" style={{ fontSize: fontSize }}>Bluespace note</p>
            <hr />
            <div className="icon-section">
                {isSearchVisible ? (
                    <img
                        src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1727776458/icons8-cancel-50_h68kgk.png"
                        alt="Cancel Icon"
                        className="search-icon"
                        onClick={() => setIsSearchVisible(false)}
                    />
                ) : (
                    <img
                        src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724248540/icons8-search-50_th38sw.png"
                        alt="Search Icon"
                        className="search-icon"
                        onClick={() => setIsSearchVisible(true)}
                    />
                )}
                {isSearchVisible && (
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                )}
                <img
                    src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724248654/icons8-add-new-48_h3zqh8.png"
                    alt="Add Icon"
                    className="pluse-icon"
                    onClick={addTask}
                />
            </div>
            <div className="text-area">
           
                <input
                    type="text"
                    placeholder="Enter task title"
                    className="input-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

            
                <textarea
                    placeholder="Enter subtasks (one per line)"
                    className="textarea-input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <div className="list-container">
                    {filteredTasks.map((item, index) => (
                        <div key={index} className="main-item" style={{ backgroundColor: item.backgroundColor }}>
                            <div className='align'>
                                <h1 className="task-title" style={{ fontSize: fontSize }}>
                                    {item.candidateName} : {item.title}
                                </h1>
                                <img
                                    src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724335671/icons8-delete-32_xzvsc2.png"
                                    alt="Delete Icon"
                                    className="delete-icon"
                                    onClick={() => deleteTask(index)}
                                />
                            </div>
                            <ul>
                                {item.tasks.map((taskItem, i) => (
                                    <li key={i} className="task-item" style={{ fontSize: fontSize }}>
                                        {taskItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="miniicon-section">
                    <img
                        src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724304220/palette_nnbdm6.png"
                        alt="Palette Icon"
                        className="img-1"
                        onClick={() => setIsColorPickerVisible(!isColorPickerVisible)}
                    />
                    {isColorPickerVisible && (
                        <input
                            type="color"
                            className="color-picker"
                            onChange={(e) => setBgColor(e.target.value)}
                            value={bgColor}
                            style={{ marginLeft: '10px' }}
                        />
                    )}
                    <img
                        src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724304231/A_lni5o3.png"
                        alt="Font Size Icon"
                        className="img-2"
                        onClick={() => setFontSize(prevSize => (prevSize === '16px' ? '20px' : '16px'))}
                    />
                </div>
            </div>
        </div>
    );
};

export default Notepad;
