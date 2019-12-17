import React from 'react';
import Navbar from './Navbar'
import {ReactComponent as Girl} from '../img/girl.svg';

const Layout = ({title, children}) => {

    return ( 
        <>
            <Navbar />
            {children}
            <Girl />

        </>

    );
}
 
export default Layout;