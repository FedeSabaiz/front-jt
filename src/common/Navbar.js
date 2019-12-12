import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>
            <div>Logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Sig In</Link>
                    </li>
                    <li>
                        <Link to='/login'>Log In</Link>
                    </li>
                    <li>
                        <Link to='/teacher'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/student'>Log out</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>    
        </>
    );
}
 
export default Navbar;