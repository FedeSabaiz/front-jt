import React from 'react';
import SocialNetwork from './SocialNetwork';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="enterprise-info" >
                    <div className="more-info">
                        <p>©2019 Just-Talk</p>
                    </div>   
                
                    <div className="address">
                            <p>México D.F.</p>
                            <p>just-talk-app@gmail.com</p>
                    </div>
                    <div className="terms">
                        <p>
                            <a href="#">Terms of Use</a>
                            <a href="#">Privacy Policy</a>
                        </p>
                        <div className="social-network">
                            <SocialNetwork />  
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer
