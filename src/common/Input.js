import React from 'react';

const Input = ({name, type, change, placeholder}) => {
    return (
        <>
            <div>
                <input 
                    name={name}
                    type={type}
                    onChange={change}
                    placeholder={placeholder}
                >
                </input>
            </div>
        </>
    );
}
 
export default Input;