import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-section">
                    <h3>EDYODA</h3>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-section">
                    <h3>RESOURCES</h3>
                    <a href="#">Courses</a>
                    <a href="#">Learning Videos</a>
                    <a href="#">Educators</a>
                    <a href="#">Edyoda Stories</a>
                    <a href="#">University</a>
                </div>
                <div className="footer-section">
                    <h3>FOR ENTERPRISES</h3>
                    <a href="#">Train Your Employees</a>
                    <div className = "footer-section">
                        <h3>QUICK LINKS</h3>
                        <a href="#">Learn and Earn</a>
                        <a href="#">Become a Learning-Enabler</a>
                        <a href="#">Tips for Learning-Enabler</a>
                        <a href="#">Request New Topic</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>CONNECT</h3>
                    <a href="#">2nd Floor #188, Survey No. - 123/1,<br/>
                        Incubes Building Next to McDonalds,<br/>
                        ITPL Main Rd, Brookefield,<br/>
                        Bengaluru, Karnataka-560037,<br/>
                        India</a><br/>
                    <a href="#"><i className="far fa-envelope"></i>hello@edyoda.com</a>
                    <a href="#"><i className="fas fa-map-marker-alt"></i><i className="fab fa-twitter"></i><i className="fab fa-facebook-f"></i><i className="fab fa-linkedin-in"></i></a>
                    <a href="#">© 2021<br/>
                        zekeLabs Technologies Private Limited</a>
                </div>
            </footer>
        </div>);
}

export default Footer