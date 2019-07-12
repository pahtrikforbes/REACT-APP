import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";

class ResetPasswordForm extends React.Component {
  state = {
    newPassword: "*************",
    confirmPassword: "*************",
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
      <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
        <div className="customer-register-form reset-form">
          <MDBRow>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="newPassword"
                className="grey-text"
              >
                New newPassword
              </label>
              <input
                value={this.state.newPassword}
                onChange={this.changeHandler}
                type="Password"
                id="newPassword"
                className="form-control"
                name="newPassword"
                placeholder="newPassword"
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
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="password"
                className="grey-text"
              >
                Confirm Password
              </label>
              <input
                value={this.state.confirmPassword}
                onChange={this.changeHandler}
                type="Password"
                id="confirmPassword"
                className="form-control"
                name="confirmPassword"
                placeholder="confirmPassword"
                required
              />
              <MDBIcon icon="lock" />
              <div className="invalid-feedback">
                Please provide a valid confirmPassword.
              </div>
              <small id="emailHelp" className="form-text text-muted">
                Password must match
              </small>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="p-social-account">
          <MDBRow>
            <MDBCol className="d-flex align-items-center" md="12">
              <div className="text-center p-reset-btn">
                <MDBBtn type="submit">Reset password</MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </form>
    );
  }
}

export default ResetPasswordForm;