import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

import Captcha from '../../../statics/images/forgot-password/captcha.png';

class ForgotPasswordForm extends React.Component {
  state = {
    email_or_phone: "",
  };

  submitHandler = event => {
    const { showModal } = this.props;
    const { email_or_phone } = this.state;
    
    event.preventDefault();
    event.target.className += " was-validated";

    if(email_or_phone) {
      showModal('check_email');
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { showModal } = this.props;

    return (
      <div className="form-padding">
        <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
          <div className="customer-register-form frogot-form">
            <MDBRow>
             <MDBCol md="12" className="mb-1">
                <p>
                  Enter your phone number or email address to receive your password reset intructions
                </p>
              </MDBCol>
              <MDBCol md="12" className="mb-5">
                <input
                  value={this.state.email_or_phone}
                  onChange={this.changeHandler}
                  type="text"
                  id="email_or_phone"
                  className="form-control"
                  name="email_or_phone"
                  placeholder="Email or Password"
                  required
                />
                <MDBIcon icon="user" />
                <div className="invalid-feedback">
                  Please add phone or email for reset password
                </div>
              </MDBCol>
            </MDBRow>
          </div>
            <div className="p-captcha mb-5">
              <MDBRow>
                <MDBCol md="6">
                 <img src={Captcha} alt="Rate Hogs" className="img-fluid" />
                </MDBCol>
                <MDBCol className="d-flex align-items-center" md="6">
                  <div className="p-captcha-btn">
                    <MDBBtn type="submit">Submit</MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </form>
          <p className="text-center mb-2 mt-4 p-signup-today">Go back to <span className="grey-text"><u onClick={() => showModal('login_customer')}>Sign in</u></span></p>  
      </div>  
    );
  }
}

export default ForgotPasswordForm;