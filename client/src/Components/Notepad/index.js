import React, { useState, useEffect } from 'react';
import './index.css'; // Import your styles

const Notepad = () => {
    const [input, setInput] = useState('');
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
    const [bgColor, setBgColor] = useState('#ffffff'); // Default background color
    const [fontSize, setFontSize] = useState('16px'); // Default font size
    const [isColorPickerVisible, setIsColorPickerVisible] = useState(false); // State for color picker visibility

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

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCancelSearch = () => {
        setIsSearchVisible(false);
        setSearchQuery('');
    };

    const toggleColorPicker = () => {
        setIsColorPickerVisible(!isColorPickerVisible);
    };

    const handleColorChange = (e) => {
        setBgColor(e.target.value);
        setIsColorPickerVisible(false); // Hide the color picker after selection
    };

    const toggleFontSize = () => {
        setFontSize(prevSize => (prevSize === '16px' ? '20px' : '16px'));
    };

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
                        onClick={handleCancelSearch}
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
                <textarea
                    placeholder="Enter title on the first line, tasks on subsequent lines"
                    className="textarea-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div className="list-container">
                    {filteredTasks.map((item, index) => (
                        <div key={index} className="main-item" style={{ backgroundColor: item.backgroundColor }}>
                            <div className='align'>
                                <h1 className="task-title" style={{ fontSize: fontSize }}>
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
                                    <li key={i} className="task-item" style={{ fontSize: fontSize }}>
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
                        onClick={toggleColorPicker}
                    />
                    {isColorPickerVisible && (
                        <input
                            type="color"
                            className="color-picker"
                            onChange={handleColorChange}
                            value={bgColor}
                            style={{ marginLeft: '10px' }}
                        />
                    )}
                    <img
                        src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724304231/A_lni5o3.png"
                        alt="Font Size Icon"
                        className="img-2"
                        onClick={toggleFontSize}
                    />
                </div>
            </div>
        </div>
    );
};

export default Notepad;
