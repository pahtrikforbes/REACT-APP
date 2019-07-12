import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, 
MDBCollapse, MDBContainer, MDBCol, MDBIcon, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import Logo from '../../statics/images/logo.png';
import HeaderCurrency from '../../statics/images/currency-menu.png';
import NotificationNew from '../../statics/images/notifcation-new.png';
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
                            <MDBNavLink to="#!"></MDBNavLink>
                            <MDBNavLink to="#!">
                                <MDBDropdown className="user-dropdown user-dropdown-arrow menu-round-icon">
                                    <MDBDropdownToggle caret color="primary">
                                    <img src={HeaderCurrency} alt="Currency" className="img-fluid" />
                                    </MDBDropdownToggle>
                                </MDBDropdown>
                            </MDBNavLink>
                            <MDBNavLink to="#!">
                                <MDBDropdown className="user-dropdown user-dropdown-arrow menu-round-icon">
                                    <MDBDropdownToggle caret color="primary">
                                        <MDBBtn social="so" className="menu-icon bell-icon">
                                        <span className="counter">1</span>
                                        <MDBIcon icon="bell" className="pr-1" />
                                        </MDBBtn>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic className="dropdown-bg menu-d-notifcation">
                                        <p>Alerts & Notifications</p>
                                        <MDBDropdownItem>
                                            <div className="menu-notification">
                                                <div className="menu-notification-image">
                                                    <img src={NotificationNew} alt="Currency" className="img-fluid" />
                                                </div>
                                                <div className="menu-notification-text">
                                                    <span>Water Lily Spa</span>
                                                    <p className="menu-notification-alert">25-50% OFF Special</p>
                                                </div>
                                            </div>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <div className="menu-notification">
                                                <div className="menu-notification-image">
                                                    <img src={NotificationNew} alt="Currency" className="img-fluid" />
                                                </div>
                                                <div className="menu-notification-text">
                                                    <p className="menu-notification-alert">Casio Watch by Jen ..</p>
                                                </div>
                                            </div>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <div className="menu-notification">
                                                <div className="menu-notification-image">
                                                    <img src={NotificationNew} alt="Currency" className="img-fluid" />
                                                </div>
                                                <div className="menu-notification-text">
                                                    <p className="menu-notification-alert">Air Jordan by Nike</p>
                                                </div>
                                            </div>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavLink>
                            <MDBNavLink to="#!">
                                <MDBDropdown className="user-dropdown user-dropdown-arrow menu-round-icon">
                                    <MDBDropdownToggle caret color="primary">
                                    <MDBBtn social="so" className="menu-icon">
                                        <span className="counter">6</span>
                                        <MDBIcon icon="heart" className="pr-1" />
                                    </MDBBtn>
                                    </MDBDropdownToggle>
                                </MDBDropdown>
                            </MDBNavLink>
                            <MDBNavLink to="#!">
                                <MDBDropdown className="user-dropdown">
                                    <MDBDropdownToggle caret color="primary">
                                        <MDBIcon icon="user-circle" /> Hi, Sharon
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic className="dropdown-bg">
                                        <p>Do you want to logout ?</p>
                                        <div className="logout-btns">
                                            <MDBBtn>Cancel</MDBBtn>    
                                            <MDBBtn>Logout</MDBBtn>
                                        </div>
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
