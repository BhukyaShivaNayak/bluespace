import React, { useState, useEffect } from 'react';
import './index.css'; // Import your styles

const Notepad = () => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            return savedTasks;
        } catch (error) {
            console.error('Failed to load tasks from localStorage:', error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
            console.log('Tasks saved to localStorage:', tasks);
        } catch (error) {
            console.error('Failed to save tasks to localStorage:', error);
        }
    }, [tasks]);

    const addTask = () => {
        if (input.trim() === '') return;

        const lines = input.trim().split('\n');
        const newTask = {
            title: lines[0].trim(),
            tasks: lines.slice(1).filter(line => line.trim() !== ''),
            backgroundColor: getRandomLightColor()
        };

        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setInput('');
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

    return (
        <div className="notepad">
            <p className="note-title">Bluespace note</p>
            <hr />
            <div className="icon-section">
                <img
                    src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724248540/icons8-search-50_th38sw.png"
                    alt="Search Icon"
                    className="search-icon"
                />
                <img
                    src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724248654/icons8-add-new-48_h3zqh8.png"
                    alt="Add Icon"
                    className="pluse-icon"
                    onClick={addTask}
                />
            </div>
            <div className="text-area">
                <textarea
                    placeholder="Enter title on the first line, tasks on subsequent lines"
                    className="textarea-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div className="list-container">
                    {tasks.map((item, index) => (
                        <div key={index} className="main-item" style={{ backgroundColor: item.backgroundColor }}>

                            <div className='align'> <h1 className="task-title">
                                {item.title}

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
                                    <li key={i} className="task-item">
                                        • {taskItem}
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
                    />
                    <img
                        src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724304231/A_lni5o3.png"
                        alt="Another Icon"
                        className="img-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Notepad;