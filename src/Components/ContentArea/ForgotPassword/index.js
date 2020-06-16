import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBModalBody, MDBModalHeader, MDBIcon  } from "mdbreact";

import Logo from '../../../statics/images/logo.png';
import ForgotPassword1 from '../../../statics/images/forgot-password/forgot-password.png';

import ForgotPasswordForm from './ForgotPasswordForm.js';

class ForgotPassword extends Component {

render() {
    const { closeModal, showModal } = this.props;

    return (
      <div className="register-customer-sec forgot-pass-sec">
        <MDBModalHeader className="p-modal-header">
            <div className="popup-header">
              <MDBIcon icon="long-arrow-alt-left" onClick={ closeModal }/>
              <img src={Logo} alt="Rate Hogs" className="img-fluid" />
            </div>
            Forgot Password ?
        </MDBModalHeader>
        <MDBModalBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="text-center" md="12">
                <img src={ForgotPassword1} alt="Rate Hogs" className="img-fluid mb-3" />
                <ForgotPasswordForm showModal={showModal} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBModalBody>
      </div>
    );
  }
}

export default ForgotPassword;