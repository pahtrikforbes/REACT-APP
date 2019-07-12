import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

class RegisterCustomerForm extends React.Component {
  state = {
    fname: "Sharon",
    lname: "Livingston",
    mphone: "8764449955",
    email: "sslivingston@email.com",
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
    const { showPrTr } = this.props;

    return (
      <div className="customer-register-form">
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="12" className="mb-2">
              <label
                htmlFor="firstName"
                className="grey-text"
              >
                First name
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="firstName"
                className="form-control"
                placeholder="First name"
                required
              />
              <MDBIcon icon="user-circle" />
            </MDBCol>
            <MDBCol md="12" className="mb-2">
              <label
                htmlFor="lastName"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Last name"
                required
              />
              <MDBIcon icon="user-circle" />
            </MDBCol>
            <MDBCol md="12" className="mb-2">
              <label
                htmlFor="mobilePhone"
                className="grey-text"
              >
                Mobile Phone
              </label>
              <input
                value={this.state.mphone}
                name="mphone"
                onChange={this.changeHandler}
                type="text"
                id="mobilePhone"
                className="form-control"
                placeholder="Last name"
                required
              />
              <MDBIcon icon="mobile-alt" />
            </MDBCol>
            <MDBCol md="12" className="mb-2">
              <label
                htmlFor="emailId"
                className="grey-text"
              >
                Email
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
              <MDBIcon far icon="envelope" />
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
              <MDBIcon icon="lock" />
              <div className="invalid-feedback">
                Please provide a valid password.
              </div>
              <small id="emailHelp" className="form-text text-muted">
                Password must be a minimum of eight (6) characters in length
              </small>
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
              <MDBIcon icon="lock" />
              <div className="invalid-feedback">
                Please provide a valid password.
              </div>
            </MDBCol>
          </MDBRow>
          <p className="text-center mb-2 mt-3"><span className="grey-text">By clicking ‘Register’ you agree to our <u onClick={() => showPrTr('privacy')}>privacy policy</u> and <u onClick={() => showPrTr('terms')}>terms</u> of use</span></p>
          <div className="text-center register-submit-btn">
            <MDBBtn type="submit">Register</MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterCustomerForm;