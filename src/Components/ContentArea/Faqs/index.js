import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import AllPopupContact from '../AllPopupContact';
import FaqSearchForm from './FaqSearchForm.js';
import FaqSlider from './FaqSlider.js';
import FaqAccordion from './FaqAccordion.js';

import Logo from '../../../statics/images/logo.png';

class Faqs extends Component {

  render() {
    const { closeModal } = this.props;

    return (
      <MDBContainer>
        <MDBModalHeader className="p-modal-header">
          <div className="popup-header">
            <MDBIcon icon="long-arrow-alt-left" onClick={closeModal} />
            <img src={Logo} alt="Rate Hogs" className="img-fluid" />
          </div>
          FAQ
      </MDBModalHeader>
        <MDBModalBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="3"><AllPopupContact /></MDBCol>
              <MDBCol md="9">
                <div className="contact-us">
                  <FaqSearchForm />
                  <FaqSlider />
                  <FaqAccordion />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBModalBody>
      </MDBContainer>
    );
  }
}

export default Faqs;

