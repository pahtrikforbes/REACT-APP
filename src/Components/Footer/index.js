import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBInput, MDBBtn, MDBIcon } from "mdbreact";

import Logo from '../../statics/images/logo.png';
import Payment from '../../statics/images/payment.png';
import Twitter from '../../statics/images/twitter.png';
import Facebook from '../../statics/images/facebook.png';
import Instagrame from '../../statics/images/instagrame.png';


import './footer.css';

const Footer = () => {
    return (
        <MDBFooter className="h-footer">
            <MDBContainer>
                <MDBRow>
                        <MDBCol md="2">
                        <div className="footer-widget pt-footer">
                            <h4 className="title">Customer Service</h4>    
                            <ul className="h-footer-list h-social">
                                <li>
                                    <a href="#!">FAQ</a>
                                </li>
                                <li>
                                    <a href="#!">Account</a>
                                </li>
                                <li>
                                    <a href="#!">21 Conolley Avenue Kingston 4 Jamaica</a>
                                </li>
                                <li>
                                    <a href="#!">+ 1 (876)648-6481</a>
                                </li>
                                <li>
                                    <a href="#!">info@veme.com</a>
                                </li>                       
                            </ul>
                        </div>                            
                    </MDBCol>

                    <MDBCol md="2">
                        <div className="footer-widget pt-footer">
                            <h4 className="title">Featured</h4>    
                            <ul className="h-footer-list">
                                <li>
                                    <a href="#!">15% 
                                    OFF Football Shoes</a>
                                </li>
                                <li>
                                    <a href="#!">$1000 OFF Lees Fifth Ave.</a>
                                </li>
                                <li>
                                    <a href="#!">Toyota Wheel of Steal Deal </a>
                                </li>                       
                            </ul>
                        </div>                            
                    </MDBCol>

                    <MDBCol md="2">
                        <div className="footer-widget pt-footer">
                            <h4 className="title">Merchant</h4>    
                            <ul className="h-footer-list">
                                <li>
                                    <a href="#!">Register</a>
                                </li>
                                <li>
                                    <a href="#!">Affiliate Programe</a>
                                </li>
                            </ul>
                        </div>                            
                    </MDBCol>

                    <MDBCol md="2">
                        <div className="footer-widget pt-footer">
                            <h4 className="title">Company</h4>    
                            <ul className="h-footer-list">
                                <li>
                                    <a href="#!">Missoion</a>
                                </li>
                                <li>
                                    <a href="#!">Inverstors</a>
                                </li>
                                <li>
                                    <a href="#!">Careers</a>
                                </li>
                                <li>
                                    <a href="#!">Service</a>
                                </li>
                                <li>
                                    <a href="#!">Blog</a>
                                </li>
                            </ul>
                        </div>                            
                    </MDBCol>

                    <MDBCol md="4">
                        <div className="footer-widget pt-footer">
                            <h4 className="title">Subscribe</h4>    
                            <div className="h-subscribe">
                                <span>Be the first to know when new sales are out</span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter you email"
                                />
                                <span>By subscribing you agree to our <a href="!#">Privacy Policy</a> and <a href="!#">Terms of user</a></span>
                                <MDBBtn>
                                    Subscribe <MDBIcon icon="arrow-right" className="ml-1" />
                                </MDBBtn>
                            </div>
                        </div>
                        <div className="payment-follow">
                            <div className="pth-footer">
                                <h5 className="title">Customer Service</h5>    
                                <ul className="h-footer-list">
                                    <li>
                                        <img src={Payment} alt="Payment Method" className="img-fluid" />
                                    </li>
                                </ul>
                            </div>
                            <div className="pth-footer">
                                <h5 className="title">Follow us</h5>    
                                <ul className="h-footer-list">
                                    <li>
                                        <a href="#!">
                                            <img src={Twitter} alt="Twitter" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <img src={Facebook} alt="Facebook" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <img src={Instagrame} alt="Instagrame" className="img-fluid" />
                                        </a>
                                    </li>                       
                                </ul>
                            </div>  
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>  
            <div className="h-footer-bottom">   
                <MDBContainer>
                    <MDBRow className="h-socket">
                        <MDBCol md="2" className="text-center">
                            <img src={Logo} alt="Rate Hogs" className="img-fluid" />
                        </MDBCol>
                        <MDBCol md="7">
                            <ul className="h-socket-links-list">
                                <li><a href="#">About US</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms and use</a></li>
                                <li><a href="#">Ad Choices</a></li>
                            </ul>
                        </MDBCol>
                        <MDBCol className="h-socket-copy-right" md="3">
                            &copy; {new Date().getFullYear()} <a href="#"> Veme </a>. All rights reserved
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>        
        </MDBFooter>
    );
}

export default Footer;
