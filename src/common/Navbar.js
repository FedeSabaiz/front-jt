import React from 'react';
import { Link } from 'react-router-dom';
import authenticate from '../utils/authenticate';

const Navbar = () => {

    const { isAuthenticated, payload } = authenticate();
    console.log(isAuthenticated, payload);

    return ( 
        <>
            <div>Logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    { isAuthenticated ? ( 
                    <>
                        <li>
                            <Link to="/me">
                                Hola {payload.first_name} 
                            </Link>
                        </li>
                        <li>
                            <Link to='/teacher'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/logout'>Log out</Link>
                        </li>
                    </>) : 
                    (<>
                        <li>
                            <Link to='/Signup'>Sig In</Link>
                        </li>
                        <li>
                            <Link to='/login'>Log In</Link>
                        </li>
                    </>)
                    }
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>    
        </>
    );
}
 
export default Navbar;