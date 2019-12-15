import React from 'react';

const Select = ({label, idname, name, type, change, placeholder, value = 'T', required}) => {
    return (
        <>
            <select 
                id={idname}
                name={name}
                type={type}
                onChange={change}
                placeholder={placeholder}
                value={value}
                required={required}
            >
                <option value="T">Teacher</option>
                <option value="S">Student</option>
            </select>
        </>
    );
}
 
export default Select;