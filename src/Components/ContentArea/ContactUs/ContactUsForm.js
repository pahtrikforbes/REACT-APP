import React from "react";
import { MDBBtn, MDBInput, MDBRow, MDBCol } from 'mdbreact';

class FormPage extends React.Component {

  state = {
    email: "",
    message: ""
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
        <div className="popupform-style contactus-form">
          <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
          >
            <MDBRow>
              <MDBCol md="12" className="mb-3">
                <input
                  value={this.state.email}
                  onChange={this.changeHandler}
                  type="email"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required
                />
              </MDBCol>
              <MDBCol md="12" className="mb-3">
                <textarea
                value={this.state.message}
                name="message"
                onChange={this.changeHandler}
                type="textarea"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Enter your message"
                required
                rows="7"
                />
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
            </MDBRow>
            <div className="contactus-form-btn">
              <MDBBtn color="primary" type="submit">
                Send Message
              </MDBBtn>
            </div>
          </form>
        </div>
    );
  }
};

export default FormPage;