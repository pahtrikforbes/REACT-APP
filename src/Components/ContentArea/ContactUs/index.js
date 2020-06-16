import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBRow, MDBCol  } from 'mdbreact';
import AllPopupContact from '../AllPopupContact';
import ContactUsForm from './ContactUsForm.js';

import Logo from '../../../statics/images/logo.png';

class ContactUs extends Component {

render() {
  const { closeModal } = this.props;

  return (
    <MDBContainer>
      <MDBModalHeader className="p-modal-header">  
          <div className="popup-header">
            <MDBIcon icon="long-arrow-alt-left" onClick={closeModal}/>
            <img src={Logo} alt="Rate Hogs" className="img-fluid" />
          </div>
          Contact Us
      </MDBModalHeader>
      <MDBModalBody>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"><AllPopupContact /></MDBCol>
            <MDBCol md="9">
                <div className="p-text-sec">
                  <h5>General Inquiry</h5>
                  <p>Please complete the following information. we will respond to you as quickly as possible </p>
                </div>
                <div className="contact-us">
                  <ContactUsForm />
                </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBModalBody>
    </MDBContainer>
    );
  }
}

export default ContactUs;

