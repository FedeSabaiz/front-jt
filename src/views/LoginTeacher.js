import React from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from './../common/Layout';
import Input from '../common/Input';
import useForm from '../hooks/useForm';

const LOGIN_MUTATION = gql`

    mutation LOGIN($email: EmailAddress!,$password: String!,$roll:String!){
        login(email: $email, password: $password, roll: $roll){
            token
        }
    }

`;

function Login({history}){
    const [sendLogin] = useMutation(LOGIN_MUTATION);

    const catchData = async (inputs) => {
        const {data, errors} = await sendLogin({variables: { ...inputs, roll: 'T'}});
        if(data) {
            const { login } = data;
            sessionStorage.setItem('jtToken', login.token);
            history.push('/teacher');
        }
        if (errors) alert(`Error con tu login: ${errors}`);
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm(catchData);

    return(
        <>
            <Layout>
                <div className="container-login-form">
                    <form onSubmit={handleSubmit}>
                        < Input
                        name = "email"
                        label = "Correo:"
                        type = "email"
                        placeholder = "Escribe tu email"
                        value={inputs.email}
                        change={handleInputChange}
                        required={true}
                        />
                        < Input
                        name = "password"
                        label = "Password:"
                        type = "password"
                        placeholder = "Password"
                        value={inputs.password}
                        change={handleInputChange}
                        required={true}
                        />
                        <div className="clearfix mt-4">
                            <button type="submit" className="btn btn-primary" >Entrar</button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default Login;