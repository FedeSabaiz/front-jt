import React from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from './../common/Layout';
import Input from '../common/Input';
import Select from '../common/Select';
import useForm from '../hooks/useForm';

const CREATE_TEACHER_MUTATION = gql`

    mutation AddTeacher($data:TeacherInput!){
        createNewTeacher(data:$data){
            _id,
            email,
            first_name
        }
    }

`;

const CREATE_STUDENT_MUTATION = gql`

    mutation AddStudent($data:StudentInput!){
        createNewStudent(data:$data){
            _id,
            email,
            first_name
        }
    }

`;

function Signup({history}){

    const [ sendSignupTeacher ] = useMutation(CREATE_TEACHER_MUTATION);

    const [ sendSignupStudent ] = useMutation(CREATE_STUDENT_MUTATION);

    const catchData = async (inputs) => {
        if(inputs.password === inputs.confirm_password && inputs.roll === 'T'){
            delete inputs.confirm_password;
            console.log(inputs)
            const { data } = await sendSignupTeacher({
                variables:{ 
                    data:{
                        ...inputs
                    }
                }
            });
            console.log(data);
            if(data){
                if(data.errors) console.log(data.errors);
                history.push('/login');
            }
        } if(inputs.password === inputs.confirm_password && inputs.roll === 'S'){
            delete inputs.confirm_password;
            console.log(inputs)
            const { data } = await sendSignupStudent({
                variables:{ 
                    data:{
                        ...inputs
                    }
                }
            });
            console.log(data);
            if(data){
                if(data.errors) console.log(data.errors);
                history.push('/login-student');
            }
        }
        
         else {
            alert('Tu contraseña no coincide');
        }
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm(catchData);

    return(
        <>
            <Layout >
                <div className="container-signup">
                        <form onSubmit={handleSubmit}>
                            < Input
                            name = "first_name"
                            label = "Nombre"
                            type = "text"
                            placeholder = "Escribe tu nombre"
                            value={inputs.first_name}
                            change={handleInputChange}
                            required={true}
                            />
                            < Input
                            name = "last_name"
                            label = "Apellido"
                            type = "text"
                            placeholder = "Escribe tu apellido"
                            value={inputs.last_name}
                            change={handleInputChange}
                            required={true}
                            />
                            < Input
                            name = "email"
                            label = "Correo:"
                            type = "email"
                            placeholder = "Escribe tu email"
                            value={inputs.email}
                            change={handleInputChange}
                            required={true}
                            />
                            <Select
                                name = "roll"
                                label = "Roll: "
                                placeholder = "Escribe tu password"
                                value={inputs.roll}
                                change={handleInputChange}
                                required={true}
                            />
                            < Input
                            name = "password"
                            label = "Password: "
                            type = "password"
                            placeholder = "Escribe tu password"
                            value={inputs.password}
                            change={handleInputChange}
                            required={true}
                            />
                            < Input
                            name = "confirm_password"
                            label = "Confirma tu password: "
                            type = "password"
                            placeholder = "Escribe de nuevo tu password"
                            value={inputs.confirm_password}
                            change={handleInputChange}
                            required={true}
                            />
                            <div >
                                <button type="submit" className="btn btn-primary" >Registrar</button>
                            </div>
                        </form>
                </div>
            </Layout>
        </>
    );
};

export default Signup;