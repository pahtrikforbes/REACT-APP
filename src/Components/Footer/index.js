import React, { Component } from "react";
import { MDBContainer, MDBFooter, MDBBtn, MDBModal, MDBIcon, MDBRow, MDBCol } from "mdbreact";

import TermsAndConditions from '../ContentArea/TermsAndConditions';
import AboutUs from '../ContentArea/AboutUs';
import PrivacyPolicy from '../ContentArea/PrivacyPolicy';
import ContactUs from '../ContentArea/ContactUs';
import Faqs from '../ContentArea/Faqs';
import Merchant from '../ContentArea/Merchant';
import RegisterCustomer from '../ContentArea/RegisterCustomer';
import LoginCustomer from '../ContentArea/LoginCustomer';
import ForgotPassword from '../ContentArea/ForgotPassword';
import CheckEmail from '../ContentArea/CheckEmail';
import ResetPassword from '../ContentArea/ResetPassword';
import ProductDetail from '../ContentArea/ProductDetail';
import ProductCoupon from '../ContentArea/ProductCoupon';

import Logo from '../../statics/images/logo.png';
import Payment from '../../statics/images/payment.png';
import Twitter from '../../statics/images/twitter.png';
import Facebook from '../../statics/images/facebook.png';
import Instagrame from '../../statics/images/instagrame.png';


import './footer.css';

class Footer extends Component {
    state = {
        modal: false,
        modalContent: '',
        modalPrTr: false,
        modalContentPrTr: ''
    }

    showPrTr = (v) => {
        this.setState({
            modalPrTr: true,
            modalContentPrTr: v
        });
    }

    closePrTr = () => {
        this.setState({
            modalPrTr: false,
        });
    }

    showModal = (v) => {
        this.setState({
            modal: true,
            modalContent: v
        });
    }

    closeModal = () => {
        this.setState({
            modal: false,
        });
    }

    render() {
        const { modal, modalContent, modalContentPrTr, modalPrTr } = this.state;

        return (
            <MDBFooter className="h-footer">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="2">
                            <div className="footer-widget pt-footer">
                                <h4 className="title">Customer Service</h4>    
                                <ul className="h-footer-list h-social">
                                    <li onClick={() => this.showModal('faqs')}>
                                        FAQ
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
                                    <li onClick={() => this.showModal('register_customer')}>
                                        Register
                                    </li>
                                    <li>
                                        Affiliate Program
                                    </li>
                                    <li onClick={() => this.showModal('merchant')}>
                                        Become a Merchant
                                    </li>
                                    <li onClick={() => this.showModal('login_customer')}>
                                        Login
                                    </li>
                                    <li onClick={() => this.showModal('forgot_password')}>
                                        Forgot Password
                                    </li>
                                    <li onClick={() => this.showModal('check_email')}>
                                        Check Email
                                    </li>
                                    <li onClick={() => this.showModal('reset_password')}>
                                        Reset Password
                                    </li>
                                    <li onClick={() => this.showModal('product_detail')}>
                                        Product Detail
                                    </li>
                                    <li onClick={() => this.showModal('product_coupon')}>
                                        Product Coupon
                                    </li>
                                </ul>
                            </div>                            
                        </MDBCol>
    
                        <MDBCol md="2">
                            <div className="footer-widget pt-footer">
                                <h4 className="title">Company</h4>    
                                <ul className="h-footer-list">
                                    <li>
                                        <a href="#!">Mission</a>
                                    </li>
                                    <li>
                                        <a href="#!">Investors</a>
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
                                    <li onClick={() => this.showModal('about')}>About Us</li>
                                    <li onClick={() => this.showModal('contact')}>Contact Us</li>
                                    <li onClick={() => this.showPrTr('privacy')}>Privacy Policy</li>
                                    <li onClick={() => this.showPrTr('terms')}>Terms and use</li>
                                    <li><a href="#">Ad Choices</a></li>
                                </ul>
                            </MDBCol>
                            <MDBCol className="h-socket-copy-right" md="3">
                                &copy; {new Date().getFullYear()} <a href="#"> Veme </a>. All rights reserved
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>                

                <MDBModal isOpen={modal} toggle={this.closeModal} className={
                    modalContent === 'register_customer' && 'w1230' ||
                    modalContent === 'login_customer' && 'w654' ||
                    modalContent === 'forgot_password' && 'w654' ||
                    modalContent === 'check_email' && 'w654' ||
                    modalContent === 'reset_password' && 'w654' ||
                    modalContent === 'product_detail' && 'w924' ||
                    modalContent === 'product_coupon' && 'w924' ||
                    modalContent === 'about' && 'w1112' ||
                    modalContent === 'contact' && 'w1112' ||
                    modalContent === 'faqs' && 'w1112' ||
                    modalContent === 'merchant' && 'w1112'
                }>                    
                    {
                        modalContent === 'about' &&
                        <AboutUs closeModal={this.closeModal} />
                    }

                    {
                        modalContent === 'contact' &&
                        <ContactUs closeModal={this.closeModal} />
                    }

                    {
                        modalContent === 'faqs' &&
                        <Faqs closeModal={this.closeModal} />
                    }
                    {
                        modalContent === 'merchant' &&
                        <Merchant closeModal={this.closeModal} />
                    }
                    {
                        modalContent === 'register_customer' &&
                        <RegisterCustomer closeModal={this.closeModal} showPrTr={this.showPrTr} />
                    }
                    {
                        modalContent === 'login_customer' &&
                        <LoginCustomer closeModal={this.closeModal} showModal={this.showModal} />
                    }
                    {
                        modalContent === 'forgot_password' &&
                        <ForgotPassword closeModal={this.closeModal} showModal={this.showModal} />
                    }
                    {
                        modalContent === 'check_email' &&
                        <CheckEmail closeModal={this.closeModal} />
                    }
                    {
                        modalContent === 'reset_password' &&
                        <ResetPassword closeModal={this.closeModal} />
                    }
                    {
                        modalContent === 'product_detail' &&
                        <ProductDetail closeModal={this.closeModal} />
                    }
                    {
                        modalContent === 'product_coupon' &&
                        <ProductCoupon closeModal={this.closeModal} />
                    }
                </MDBModal>

                <MDBModal isOpen={modalPrTr} toggle={this.closePrTr} className={                    
                    modalContentPrTr === 'terms' && 'w1112' ||
                    modalContentPrTr === 'privacy' && 'w1112'
                }>
                    {
                        modalContentPrTr === 'terms' &&
                        <TermsAndConditions closePrTr={this.closePrTr} />
                    }

                    {
                        modalContentPrTr === 'privacy' &&
                        <PrivacyPolicy closePrTr={this.closePrTr} />
                    }
                </MDBModal>
            </MDBFooter>
        );
    }    
}

export default Footer;
