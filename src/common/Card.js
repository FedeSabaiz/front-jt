import React from 'react';

const Card = ({title, text, textTwo}) => {
    return (
        <>
            <div className="col-card">
                <h1>{title}</h1>
                <p>{text}</p>
                <p>{textTwo}</p>
            </div>
        </>
    );
}
 
export default Card;