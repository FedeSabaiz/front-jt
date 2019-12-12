import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import DashboardTeacher from './views/DashboardTeacher';
import DashboardStudent from './views/DashboardStudent';
import Contact from './views/Contact';

const Routes = () => {
    return ( 
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/teacher" component={DashboardTeacher} />
            <Route exact path="/student" component={DashboardStudent} />
            <Route exact path="/contact" component={Contact}  />
        </>    
    );
}
 
export default Routes;