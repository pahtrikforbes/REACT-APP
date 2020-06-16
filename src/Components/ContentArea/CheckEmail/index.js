import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBModalBody, MDBModalHeader, MDBIcon, MDBBtn  } from "mdbreact";

import Logo from '../../../statics/images/logo.png';
import CheckEmail1 from '../../../statics/images/check-email/check-email.png';

class CheckEmail extends Component {

render() {
    const { closeModal } = this.props;

    return (
      <div className="register-customer-sec check-email-sec">
        <MDBModalHeader className="p-modal-header">
            <div className="popup-header">
              <MDBIcon icon="long-arrow-alt-left" onClick={ closeModal }/>
              <img src={Logo} alt="Rate Hogs" className="img-fluid" />
            </div>
            Check your Email
        </MDBModalHeader>
        <MDBModalBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="text-center check-email-info form-padding" md="12">
                <img src={CheckEmail1} alt="Rate Hogs" className="img-fluid mb-3" />
                <p>We’ve sent your instruction how to reset your password</p>
                <div className="p-back-to-btn">
                  <MDBBtn onClick={ closeModal } type="submit"><MDBIcon icon="long-arrow-alt-left"/> Back to <img src={Logo} alt="Rate Hogs" className="img-fluid" /></MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBModalBody>
      </div>
    );
  }
}

export default CheckEmail;