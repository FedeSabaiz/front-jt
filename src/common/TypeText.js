import React from 'react';
import Typed from 'react-typed';

const Typetext = () => {
    return ( 
        <div className="container-typed">
            <h3 className="typed">
                <Typed 
                    strings={
                        ["Bienvenido", "Welcome", "Bienvenue", "ku xaá nii", "Benvingut"]
                    }
                    typeSpeed={120}
                    backSpeed={80}
                    loop
                />
            </h3>
        </div>
     );
}
 
export default Typetext;