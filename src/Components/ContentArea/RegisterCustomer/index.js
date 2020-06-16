import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer, MDBModalBody, MDBModalHeader, MDBIcon, MDBInput  } from "mdbreact";

import Logo from '../../../statics/images/logo.png';
import RegisterCustomer1 from '../../../statics/images/register-customer/register-customer.png';

import RegisterCustomerForm from './RegisterCustomerForm.js';

class RegisterCustomer extends Component {

render() {
    const { closeModal, showPrTr } = this.props;

    return (
      <div className="register-customer-sec">
        <MDBModalHeader className="p-modal-header">
            <div className="popup-header">
              <MDBIcon icon="long-arrow-alt-left" onClick={ closeModal }/>
              <img src={Logo} alt="Rate Hogs" className="img-fluid" />
            </div>
            <span>Register</span>
        </MDBModalHeader>
        <MDBModalBody className="pl-0 mobile-padding-l">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="pl-0 mobile-padding-l" md="8">
                <img src={RegisterCustomer1} alt="Rate Hogs" className="img-fluid" />
              </MDBCol>
              <MDBCol md="4">
                <RegisterCustomerForm showPrTr={showPrTr} />
                <div className="or-line"><span>or</span></div>
                <div className="p-social-account">
                    <MDBRow>
                      <MDBCol className="d-flex align-items-center" md="6">
                        <p>Register with a social account</p>
                      </MDBCol>
                      <MDBCol md="6">
                        <ul>
                          <li>
                            <MDBBtn className="tw" floating social="tw" size="md">
                              <MDBIcon fab icon="twitter" className="pr-1" />
                            </MDBBtn>
                          </li>
                          <li>
                            <MDBBtn className="fb" floating social="fb" size="md">
                              <MDBIcon fab icon="facebook-f" className="pr-1" />
                            </MDBBtn>
                          </li>
                          <li>
                            <MDBBtn className="gp" floating social="gp" size="md">
                              <MDBIcon fab icon="google-plus-g" className="pr-1" />
                            </MDBBtn>
                          </li>
                        </ul>
                      </MDBCol>
                    </MDBRow>
                  </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBModalBody>
      </div>
    );
  }
}

export default RegisterCustomer;