import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './../common/Layout';
import Head from './../common/Head';
import Button from './../common/Button';

function Login({history}){
    
    const [access, setAccess] = useState({
        roll: ''
    })

    const handleClick = (e) => {
        console.log(e.target.name);
        setAccess({
            roll: e.target.name
        })
        if (e) console.log(e)
    }

    return(
        <>
            {access.roll === 'teacher' ? <Redirect to="/login-teacher"/> : <></>}
            {access.roll === 'student' ? <Redirect to="/login-student"/> : <></>}

            <Layout>
                <section className="container-login">
                    <Head title="¿Cómo quieres acceder?" />
                    <div className="col-access">
                        <Button 
                        name="teacher"
                        click={handleClick}
                        text="Teacher"
                        />
                        <Button 
                        name="student"
                        click={handleClick}
                            text="Student"
                        />
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Login;
