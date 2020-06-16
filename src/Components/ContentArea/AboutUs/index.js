import React, { Component } from 'react';
import { MDBContainer, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBRow, MDBCol  } from 'mdbreact';
import AllPopupContact from '../AllPopupContact';

import Logo from '../../../statics/images/logo.png';

class AboutUs extends Component {

render() {
  const { closeModal } = this.props;

  return (
    <MDBContainer>
      <MDBModalHeader className="p-modal-header">
          <div className="popup-header">
            <MDBIcon icon="long-arrow-alt-left" onClick={closeModal}/>
            <img src={Logo} alt="Rate Hogs" className="img-fluid" />
          </div>
          About Us
      </MDBModalHeader>
      <MDBModalBody>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"><AllPopupContact /></MDBCol>
            <MDBCol md="9">
                <div className="p-text-sec">
                  <h5>Mission</h5>
                  <p>Veme’s mission is to make life more affordable, our team is committed to helping people save more money whenever and wherever they shop.Working with retailers and restaurants both online and at their physical locations, our goal is to work hard every day to secure the best exclusive savings for our website. </p>
                  <p>Working with retailers and restaurants both online and at their physical locations, our goal is to work hard every day to secure the best exclusive savings for our website. </p>
                  <p>Our partnerships team is dedicated to building relationships with the biggest brands in Jamaica to secure amazing exclusive offers that are only available on Veme. </p>                  
                  <p>Company interested in engaging their customers in new unique way can post their deal to veme and submit content for our Promotional emails. Driving awareness to a broad-reaching or targeted segment of Veme’s audience, while leveraging the higher engagement typical of targeted content. </p>
                  <p>We earn a small commission from brands when someone makes a purchase using an offer on our website. Some brands can pay fixed fees to advertise with us, but that doesn't mean we will promote any offer. We only accept payment where we're genuinely excited about a great saving. And some deals we add to the site without making a dollar. Because, well, they're just too good to miss.</p>
                </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBModalBody>
    </MDBContainer>
    );
  }
}

export default AboutUs;

