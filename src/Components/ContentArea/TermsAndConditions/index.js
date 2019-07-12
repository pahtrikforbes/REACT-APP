import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBRow, MDBCol  } from 'mdbreact';
import AllPopupContact from '../AllPopupContact';

import Logo from '../../../statics/images/logo.png';

class TermsAndConditions extends Component {

render() {
  const { closePrTr } = this.props;

  return (
    <MDBContainer>
      <MDBModalHeader className="p-modal-header">
          <div className="popup-header">
            <MDBIcon icon="long-arrow-alt-left" onClick={closePrTr}/>
            <img src={Logo} alt="Rate Hogs" className="img-fluid" />
          </div>
          Terms and Conditions
      </MDBModalHeader>
      <MDBModalBody>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"><AllPopupContact /></MDBCol>
            <MDBCol md="9">
                <div className="p-text-sec">
                  <h5>Last updated: February 24, 2019</h5>
                  <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the veme.com website (the "Service") operated by Veme ("us", "we", or "our").</p>
                  <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
                  <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. The Terms and Conditions agreement for Veme has been created with the help of FreePrivacyPolicy. </p>
                  <h5>Accounts</h5>
                  <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                  <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
                  <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
                  <h5>Links To Other Web Sites</h5>
                  <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Veme.</p>
                  <p>Veme has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Veme shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                  <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
                  <h5>Termination</h5>
                  <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                  <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
                  <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
                  <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. </p>
                </div>
                <div className="terms-btn">
                  <MDBBtn className="green-border" onClick={ closePrTr }>Accept</MDBBtn>
                  <MDBBtn className="red-border" onClick={ closePrTr }>Decline</MDBBtn>
                </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBModalBody>
    </MDBContainer>
    );
  }
}

export default TermsAndConditions;


 

 
 
 

 

 
 
/*We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability. Governing Law These Terms shall be governed and construed in accordance with the laws of Jamaica, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service. Changes We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service. Contact Us If you have any questions about these Terms, please contact us. */