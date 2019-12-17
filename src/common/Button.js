import React from 'react';

const Button = ({name, click, text}) => {
    return (
        <button
            name={name}
            onClick={click}
        >
            {text}
        </button>
    );
}
 
export default Button;