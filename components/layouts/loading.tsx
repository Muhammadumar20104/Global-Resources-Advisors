import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <svg viewBox="25 25 50 50" className="loader-container">
                <circle cx="50" cy="50" r="20" className="loader"></circle>
            </svg>
        </div>
    );
};

export default Loading;
