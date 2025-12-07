import React from 'react';
import './Box.css'
import Button from '../Button/Button';

const Box = ({ image, title, description, price1, price2, contentBtn }) => {
    return (
        <div className="box">
            <img src={image} alt={title} />
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star fa-1x"></i>
                    ))}
                </div>
                <div className="price">Prix :  {price1} <span>{price2} </span></div>
                <Button title={contentBtn} typeBtn="text" />
            </div>
        </div>
    );
};

export default Box;