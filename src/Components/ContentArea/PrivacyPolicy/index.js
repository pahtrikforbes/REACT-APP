import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModalBody, MDBModalHeader, MDBIcon, MDBRow, MDBCol  } from 'mdbreact';
import AllPopupContact from '../AllPopupContact';

import Logo from '../../../statics/images/logo.png';

class PrivacyPolicy extends Component {

render() {
  const { closePrTr } = this.props;

  return (
    <MDBContainer>
      <MDBModalHeader className="p-modal-header">
          <div className="popup-header">
            <MDBIcon icon="long-arrow-alt-left" onClick={closePrTr}/>
            <img src={Logo} alt="Rate Hogs" className="img-fluid" />
          </div>
          Privacy Policy
      </MDBModalHeader>
      <MDBModalBody>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"><AllPopupContact /></MDBCol>
            <MDBCol md="9">
                <div className="p-text-sec">
                  <h5>Effective date: February 24, 2019</h5>
                  <p>Veme ("us", "we", or "our") operates the Veme.com website (the "Service"). </p>
                  <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for Veme is created with the help of the Free Privacy Policy website. </p>
                  <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from Veme.com </p>
                  <h5>Information Collection And Use </h5>
                  <p>We collect several different types of information for various purposes to provide and improve our Service to you. </p>
                  <h5>Types of Data Collected </h5>
                  <u>Personal Data</u>
                  <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: </p>
                  <p>Email address First name and last name Cookies and Usage Data Usage Data </p>
                  <p>We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. </p>
                  <h5>Disclosure Of Data</h5>
                  <p>Legal Requirements</p>
                  <p>Veme may disclose your Personal Data in the good faith belief that such action is necessary to: </p>
                  <p>To comply with a legal obligation To protect and defend the rights or property of Veme To prevent or investigate possible wrongdoing in connection with the Service To protect the personal safety of users of the Service or the public To protect against legal liability Security Of Data </p>
                  <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. </p>
                </div>
                <div className="helpfull-btn">
                   <span>Was this information helpful ?</span>
                   <div className="likes-btn">
                    <MDBBtn onClick={ closePrTr }>
                      <MDBIcon icon="thumbs-up" /> Yes
                    </MDBBtn>
                    <MDBBtn onClick={ closePrTr }>
                      <MDBIcon icon="thumbs-down" /> No
                    </MDBBtn>
                   </div>
                </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBModalBody>
    </MDBContainer>
    );
  }
}

export default PrivacyPolicy   ;

/*     Analytics We may use third-party Service Providers to monitor and analyze the use of our Service. Children's Privacy Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers. Changes To This Privacy Policy We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. */

