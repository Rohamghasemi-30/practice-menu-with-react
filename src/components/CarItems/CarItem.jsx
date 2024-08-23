import React from 'react';
import "./CarItem.css"

function CarItem({ name, price, image }) {
    return (
        <li>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>قیمت: {price}</p>
        </li>
    );
}

export default CarItem;
