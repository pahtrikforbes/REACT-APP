import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

class MerchantRegisterForm extends React.Component {
  state = {
    fullName: "Sharon",
    email: "sslivingston@email.com",
    company: "Veme",
    companyUrl: "www.example.com",
    Password: "*************",
    ConfirmPassword: "*************"
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="customer-register-form merchant-form">
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="12" className="mb-2">
              <label
                htmlFor="fullName"
                className="grey-text"
              >
                Full name
              </label>
              <input
                value={this.state.fullName}
                name="fullName"
                onChange={this.changeHandler}
                type="text"
                id="fullName"
                className="form-control"
                placeholder="Full name"
                required
              />
            </MDBCol>
            <MDBCol md="12" className="mb-2">
              <label
                htmlFor="emailId"
                className="grey-text"
              >
                Email Address
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="emailId"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                required
              />
            </MDBCol>
            <MDBCol md="12" className="mb-2">
              <label
                htmlFor="company"
                className="grey-text"
              >
                Company/Organization
              </label>
              <input
                value={this.state.company}
                name="company"
                onChange={this.changeHandler}
                type="text"
                id="company"
                className="form-control"
                placeholder="Organization"
                required
              />
            </MDBCol>
            <MDBCol md="12" className="mb-2">
              <label
                htmlFor="companyUrl"
                className="grey-text"
              >
                Company URL
              </label>
              <input
                value={this.state.companyUrl}
                name="companyUrl"
                onChange={this.changeHandler}
                type="text"
                id="companyUrl"
                className="form-control"
                placeholder="Company URL"
                required
              />
            </MDBCol>
            <MDBCol md="12" className="mb-2">
              <label
                htmlFor="password"
                className="grey-text"
              >
                Password
              </label>
              <input
                value={this.state.Password}
                onChange={this.changeHandler}
                type="Password"
                id="password"
                className="form-control"
                name="Password"
                placeholder="Password"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid password.
              </div>
            </MDBCol>
            <MDBCol md="12" className="mb-2">
              <label
                htmlFor="confirmPassword"
                className="grey-text"
              >
                Confirm Password
              </label>
              <input
                value={this.state.ConfirmPassword}
                onChange={this.changeHandler}
                type="Password"
                id="confirmPassword"
                className="form-control"
                name="ConfirmPassword"
                placeholder="Password"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid password.
              </div>
            </MDBCol>
          </MDBRow>
          <p className="text-center mb-2 mt-3">By clicking ‘Register’ you agree to our <a href="#!"><u>privacy policy</u></a> and <a href="#!"><u>terms of use</u></a></p>
          <div className="text-center merchant-btn">
            <MDBBtn type="submit">Register</MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default MerchantRegisterForm;