import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBModalBody, MDBModalHeader, MDBIcon  } from "mdbreact";

import Logo from '../../../statics/images/logo.png';
import LoginCustomer1 from '../../../statics/images/login-customer/login-customer.png';

import LoginCustomerForm from './LoginCustomerForm.js';

class LoginCustomer extends Component {

render() {
    const { closeModal, showModal } = this.props;

    return (
      <div className="register-customer-sec login-customer-sec">
        <MDBModalHeader className="p-modal-header">
            <div className="popup-header">
              <MDBIcon icon="long-arrow-alt-left" onClick={ closeModal }/>
              <img src={Logo} alt="Rate Hogs" className="img-fluid" />
            </div>
            Login
        </MDBModalHeader>
        <MDBModalBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="" md="12">
                <img src={LoginCustomer1} alt="Rate Hogs" className="img-fluid" />
                <LoginCustomerForm showModal={showModal} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBModalBody>
      </div>
    );
  }
}

export default LoginCustomer;