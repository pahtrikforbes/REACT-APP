import React from "react";
import { MDBInput, MDBCol } from "mdbreact";

const FaqSearchForm = () => {
  return (
    <div className="faq-search row"> 
      <MDBCol md="5">
        <p>How may we help you ?</p>
      </MDBCol>
      <MDBCol md="7">
        <MDBInput hint="Ask us a question , you may find the answer in our FAQ" type="text" containerClass="mt-0" />
      </MDBCol>
    </div>
  );
}

export default FaqSearchForm;