import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({title, children}) => {

    return ( 
        <>
            <Navbar />
            {children}
            
            <Footer />
        </>

    );
}
 
export default Layout;