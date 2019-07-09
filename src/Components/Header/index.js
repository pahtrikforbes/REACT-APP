import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBIcon} from "mdbreact";

import Logo from '../../statics/images/logo.png';
import './header.css';

class Header extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
    
    return (
        <MDBNavbar dark expand="md" className="h-navbar">
            <MDBContainer>
                <MDBNavbarBrand>
                    <img src={Logo} alt="Rate Hogs" className="img-fluid" />
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={this.toggleCollapse} />

                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav center>
                        <div className="h-search-bar">
                            <div className="input-group-prepend">
                            <span className="" id="basic-text1">
                                <MDBIcon className="h-search-icon" icon="search" />
                            </span>
                            </div>
                            <input className="form-control form-control-sm" type="text" placeholder="Search coupons, stores, products and more details .." aria-label="Search" />
                        </div>
                        <MDBNavItem className="h-login">
                            <MDBIcon className="h-user-icon" icon="user-circle" />
                            <MDBNavLink to="#!">Login</MDBNavLink>
                            <span>/</span>
                            <MDBNavLink to="#!">Register</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav> 
                </MDBCollapse>
            </MDBContainer>    
        </MDBNavbar>
        );
    }
}

export default Header;
