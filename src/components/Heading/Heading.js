import React from 'react';
import './Heading.css'

const Heading = ({ title }) => {
    return (
        <div>
            <h2 className="heading">
                {title.split('').map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </h2>
        </div>
    );
};

export default Heading;