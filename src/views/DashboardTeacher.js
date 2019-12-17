import React from 'react';
import Layout from './../common/Layout';
import Button from './../common/Button';

const DashboardTeacher = () => {
    return ( 
        <>
            <Layout>
                <div className="container-dashboard">
                    <h1>!Bienvenido a tu panel de administracion, Teacher!</h1>
                    <a href="https://peaceful-bastion-88494.herokuapp.com/">
                        <Button
                            text="Iniciar llamada"
                        />
                    </a>
                </div>
            </Layout>
        </>    
    );
}
 
export default DashboardTeacher;