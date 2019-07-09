import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, 
MDBCollapse, MDBContainer, MDBCol, MDBIcon, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import Logo from '../../statics/images/logo.png';
import User from '../../statics/images/user-login.png';
import HeaderCurrency from '../../statics/images/header-currency.png';
import './header.css';

class HeaderLogin extends Component {
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
                            <MDBNavLink to="#!"><img src={HeaderCurrency} alt="Currency" className="img-fluid" /></MDBNavLink>
                            <MDBNavLink to="#!">
                                <MDBDropdown className="user-dropdown user-dropdown-arrow">
                                    <MDBDropdownToggle caret color="primary">
                                        <MDBBtn social="so" className="menu-icon bell-icon">
                                        <span className="counter">1</span>
                                        <MDBIcon icon="bell" className="pr-1" />
                                        </MDBBtn>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem>Notification 1</MDBDropdownItem>
                                        <MDBDropdownItem>Notification 2</MDBDropdownItem>
                                        <MDBDropdownItem>Notification 3</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavLink>
                            <MDBNavLink to="#!">
                                <MDBDropdown className="user-dropdown user-dropdown-arrow">
                                    <MDBDropdownToggle caret color="primary">
                                    <MDBBtn social="so" className="menu-icon">
                                        <span className="counter">6</span>
                                        <MDBIcon icon="heart" className="pr-1" />
                                    </MDBBtn>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem>Notification 1</MDBDropdownItem>
                                        <MDBDropdownItem>Notification 2</MDBDropdownItem>
                                        <MDBDropdownItem>Notification 3</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavLink>
                            <MDBNavLink to="#!">
                                <MDBDropdown className="user-dropdown">
                                    <MDBDropdownToggle caret color="primary">
                                        <MDBIcon icon="user-circle" /> Hi, Sharon
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem>User Name</MDBDropdownItem>
                                        <MDBDropdownItem>User Information</MDBDropdownItem>
                                        <MDBDropdownItem divider />
                                        <MDBDropdownItem>User Logout</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav> 
                </MDBCollapse>
            </MDBContainer>    
        </MDBNavbar>
        );
    }
}

export default HeaderLogin;
