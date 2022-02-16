import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>CRUD APPLICATION</h4>
                        <ul className="list-unstyled">
                            <li>+8801777774371</li>
                            <li>Savar, Dhaka</li>
                            <li>Daffodil International University</li>
                        </ul>
                    </div>
                     <div className="col">
                        <h4>Comfortable</h4>
                        <ul className="list-unstyled">
                            <li>React</li>
                            <li>Node</li>
                            <li>Django</li>
                         </ul>
                    </div>
                    <div className="col">
                        <h4>Projects</h4>
                        <ul className="list-unstyled">
                            <li>Ecommerce</li>
                            <li>Blog</li>
                            <li>Crud Application</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} CRUD APPLICATION | All right reserved | Term of service | Privacy
                    </p>
                </div>
             </div>
        </div>
        
    );
};

export default Footer;