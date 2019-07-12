import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBRow, MDBCol  } from 'mdbreact';
import AllPopupContact from '../AllPopupContact';
import MerchantRegisterForm from './MerchantRegisterForm.js';
import MerchantInfo from './MerchantInfo.js';
import MerchantCustomer from './MerchantCustomer.js';

import Logo from '../../../statics/images/logo.png';

class Merchant extends Component {

render() {
  const { closeModal } = this.props;

  return (
    <MDBContainer>
      <MDBModalHeader className="p-modal-header">
          <div className="popup-header">
            <MDBIcon icon="long-arrow-alt-left" onClick={ closeModal }/>
            <img src={Logo} alt="Rate Hogs" className="img-fluid" />
          </div>
          Become a Merchant
      </MDBModalHeader>
      <MDBModalBody>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"><AllPopupContact /></MDBCol>
            <MDBCol md="9">
                <div className="merchant-form-sec">
                  <MDBRow>
                    <MDBCol md="7">
                      <MerchantInfo />
                    </MDBCol>
                    <MDBCol md="5">
                      <MerchantRegisterForm />
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="customer-service-sec">
                  <MDBRow>
                    <MDBCol md="12">
                     <MerchantCustomer />
                    </MDBCol>
                  </MDBRow>
                </div>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBModalBody>
    </MDBContainer>
    );
  }
}

export default Merchant;

