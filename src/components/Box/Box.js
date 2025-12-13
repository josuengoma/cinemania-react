import React from 'react';
import './Box.css'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';
import { FaStar } from 'react-icons/fa';


const Box = ({ id, image, title, description, price1, price2, contentBtn }) => {

    const handleClick = useRedirect()

    return (
        <div className="box">
            <img src={image} alt={title} />
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} color='gold' />

                    ))}
                </div>
                <div className="price">Prix :  {price1} <span>{price2} </span></div>
                <Button contentBtn="Regarder maintenant" typeBtn="text" onClick={() => handleClick(id)} />
            </div>
        </div>
    );
};

export default Box;