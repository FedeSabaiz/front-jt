import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import LoginStudent from './views/LoginStudent';
import DashboardTeacher from './views/DashboardTeacher';
import DashboardStudent from './views/DashboardStudent';
import Contact from './views/Contact';

function Logout(){
    sessionStorage.removeItem('jtToken');
    console.log('Entre al logout');
    return <Redirect to="Login"/>
}

const Routes = () => {
    return ( 
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/login-student" component={LoginStudent} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/teacher" component={DashboardTeacher} />
            <Route exact path="/student" component={DashboardStudent} />
            <Route exact path="/contact" component={Contact}  />
        </>    
    );
}
 
export default Routes;