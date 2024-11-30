'use client';  // Add this at the top of the file

import { useState, useEffect } from 'react';

const LinuxHeader = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setCurrentTime(time); 
        }, 1000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center bg-gray-800 p-4 fixed top-0 left-0 right-0">
            <h1 className="text-white text-xl">{currentTime}</h1>
        </div>
    );
};

export default LinuxHeader;
