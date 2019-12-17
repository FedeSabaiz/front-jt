import React, { useState, useEffect } from 'react';
import Svg from './../common/Svg';
import SvgStudent from './../common/SvgStudent';
import Card from './../common/Card';

const InfoSection = () => {

    // const [teacher, setTeacher] = useState({

    // });

    return (
        <>
            <div className="container-info">
                <div className="col-info-card">
                    <Card 
                        title="Enseña"
                        text="Da clases a usuarios de todo el mundo desde cualquier lugar."
                        textTwo="Conéctate y obtén grandes beneficios por tu conocimiento."
                    />
                    <Svg />
                
                </div>
                <div className="col-info-card">
                    <Card 
                        title="Aprende"
                        text="Enfócate en escuchar y entablar conversaciones en el idioma que estás aprendiendo."
                        textTwo="Conéctate, habla y aprende."
                    />
                    <SvgStudent />
                </div>

            </div>
        </>
    );
}
 
export default InfoSection;