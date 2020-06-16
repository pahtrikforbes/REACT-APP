import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";

class MerchantCustomer extends Component {

render() {
    return (
      <div className="merchant-customer-sec mt-5">
        <MDBRow className="row">
          <MDBCol md="6">
            <div className="merchant-customer-info">
              <h5>customer service</h5>
              <p>It is a long established fact that a reader will be distracted by the readable.</p>
              <a href="#!">Learn More</a>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div className="merchant-customer-info">
              <h5>Top Rated Program</h5>
              <p>It is a long established fact that a reader will be distracted by the readable.</p>
              <a href="#!">Learn More</a>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default MerchantCustomer;