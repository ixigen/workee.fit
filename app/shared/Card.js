import React from 'react';

const Card = ({ title, description }) => (
    <div className="card">
        <h1>{ title }</h1>
        <p>{ description }</p>
    </div>
);

export default Card;