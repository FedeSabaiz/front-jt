import React from 'react';
import Navbar from './Navbar'

const Layout = ({title, children}) => {

    return ( 
        <>
            <Navbar />
            {children}
        </>

    );
}
 
export default Layout;