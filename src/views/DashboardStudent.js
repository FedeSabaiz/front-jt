import React from 'react';
import Layout from './../common/Layout';
import Button from './../common/Button';

const DashboardStudent = () => {
    return (
        <>
            <Layout>
                <div className="container-dashboard">
                    <h1>!Bienvenido a tu panel de administracion, Student!</h1>
                    <a href="https://peaceful-bastion-88494.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <Button
                            text="Iniciar llamada"
                        />
                    </a>
                </div>
            </Layout>
        </>
    );
}
 
export default DashboardStudent;