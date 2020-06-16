import React, { Component } from "react";
import { MDBCollapse, MDBCard, MDBCardBody, MDBBtn, MDBRow, MDBCol } from "mdbreact";

class FaqAccordion extends Component {
state={
  collapseID: "collapse1"
}

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
const { collapseID } = this.state;
    return (
        <div className="popup-md-accordion mt-3">
          <h5>Frequently Asked Questions</h5>
          <MDBCard className="mt-3">
            <div className="accordion-header" onClick={this.toggleCollapse("collapse1")}>
            Q: When does the coupons expire ?
            </div>
            <MDBCollapse id="collapse1" isOpen={collapseID}>
              <MDBCardBody className="accordion-body">
                <MDBRow className="row">
                  <MDBCol md="6">
                    A: Coupons usually expire 14 days after verified.
                  </MDBCol>
                  <MDBCol className="p-vertical-align" md="6">
                    <p>Was this information helpful ?</p>
                    <div className="yesno-btn">
                      <MDBBtn outline color="success">Yes</MDBBtn>
                      <MDBBtn outline color="danger">No</MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className="mt-3">
            <div className="accordion-header" onClick={this.toggleCollapse("collapse2")}>
            Q: When does the coupons expire ?
            </div>
            <MDBCollapse id="collapse2" isOpen={collapseID}>
              <MDBCardBody className="accordion-body">
                <MDBRow className="row">
                  <MDBCol md="6">
                    A: Coupons usually expire 14 days after verified.
                  </MDBCol>
                  <MDBCol className="p-vertical-align" md="6">
                    <p>Was this information helpful ?</p>
                    <div className="yesno-btn">
                      <MDBBtn outline color="success">Yes</MDBBtn>
                      <MDBBtn outline color="danger">No</MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className="mt-3">
            <div className="accordion-header" onClick={this.toggleCollapse("collapse3")}>
            Q: When does the coupons expire ?
            </div>
            <MDBCollapse id="collapse3" isOpen={collapseID}>
              <MDBCardBody className="accordion-body">
                <MDBRow className="row">
                  <MDBCol md="6">
                    A: Coupons usually expire 14 days after verified.
                  </MDBCol>
                  <MDBCol className="p-vertical-align" md="6">
                    <p>Was this information helpful ?</p>
                    <div className="yesno-btn">
                      <MDBBtn outline color="success">Yes</MDBBtn>
                      <MDBBtn outline color="danger">No</MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className="mt-3">
            <div className="accordion-header" onClick={this.toggleCollapse("collapse4")}>
            Q: When does the coupons expire ?
            </div>
            <MDBCollapse id="collapse4" isOpen={collapseID}>
              <MDBCardBody className="accordion-body">
                <MDBRow className="row">
                  <MDBCol md="6">
                    A: Coupons usually expire 14 days after verified.
                  </MDBCol>
                  <MDBCol className="p-vertical-align" md="6">
                    <p>Was this information helpful ?</p>
                    <div className="yesno-btn">
                      <MDBBtn outline color="success">Yes</MDBBtn>
                      <MDBBtn outline color="danger">No</MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </div>
    );
  }
}

export default FaqAccordion;