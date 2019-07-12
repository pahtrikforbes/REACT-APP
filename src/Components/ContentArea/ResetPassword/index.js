import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBModalBody, MDBModalHeader, MDBIcon  } from "mdbreact";

import Logo from '../../../statics/images/logo.png';
import ResetPassword1 from '../../../statics/images/reset-password/reset-password.png';

import ResetPasswordForm from './ResetPasswordForm.js';

class ResetPasword extends Component {

render() {
    const { closeModal } = this.props;

    return (
      <div className="reset-password-sec">
        <MDBModalHeader className="p-modal-header">
            <div className="popup-header">
              <MDBIcon icon="long-arrow-alt-left" onClick={ closeModal }/>
              <img src={Logo} alt="Rate Hogs" className="img-fluid" />
            </div>
            Reset your password, sh*****ng@gmail.com
        </MDBModalHeader>
        <MDBModalBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="form-padding reset-image" md="12">
                <img src={ResetPassword1} alt="Rate Hogs" className="img-fluid mb-3 " />
                <ResetPasswordForm />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBModalBody>
      </div>
    );
  }
}

export default ResetPasword;