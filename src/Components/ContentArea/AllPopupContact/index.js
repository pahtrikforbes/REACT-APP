import React, { Component } from "react";

import { MDBIcon  } from 'mdbreact';

class AllPopupContact extends Component {
    render() {
        return(
            <div className="model-contact-sec">
                <div className="p-links-sec">
                  <h5>Help</h5>
                  <ul>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Affiliate</a></li>
                      <li><a href="#">Program</a></li>
                  </ul>
                  <h5>Quick Links</h5>
                  <ul>
                      <li><a href="#">Quick Links 50% off sale BOGO PUMA </a></li>
                  </ul>
                  <h5>Company</h5>
                  <ul>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Mission</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Investors</a></li>
                  </ul>
                </div>
                <div className="p-address">
                  <div className="p-address-btn">
                    <a href="#">
                        <MDBIcon icon="phone-volume" />
                        <p>Contact Us</p>
                    </a>
                    <a href="#">
                        <MDBIcon icon="question" />
                        <p>Questions</p>
                    </a>
                  </div>
                  <div className="p-address-info">
                        <p>21 Conolley Avenue Kingston 4 Jamaica</p>
                        <a href="tel:(876)648-6481">(876) 648-6481</a>
                        <a href="mailto:info@veme.com">info@veme.com</a>
                  </div>
                  

                </div>
            </div>
        )
    }
}

export default AllPopupContact;
