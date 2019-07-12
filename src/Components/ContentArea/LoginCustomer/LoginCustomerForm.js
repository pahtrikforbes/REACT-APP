import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";

class LoginCustomerForm extends React.Component {
  state = {
    userName: "Sharon",
    Password: "*************",
    radio: 2
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  }

  render() {
    const { showModal } = this.props;
    return (
      <div className="form-padding">
        <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
          <div className="customer-register-form">
            <MDBRow>
              <MDBCol md="12" className="mb-2">
                <label
                  htmlFor="userName"
                  className="grey-text"
                >
                  Username
                </label>
                <input
                  value={this.state.userName}
                  name="userName"
                  onChange={this.changeHandler}
                  type="text"
                  id="userName"
                  className="form-control"
                  placeholder="First name"
                  required
                />
                <MDBIcon icon="user-circle" />
              </MDBCol>
              <MDBCol md="12" className="mb-3">
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
              </MDBCol>
              <MDBCol md="6">
                <div className="p-rememberpass">
                    <MDBInput onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false} label="Default unchecked" className="check" type="radio" id="radio1" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="p-forgotpass text-right">
                  <span onClick={() => showModal('forgot_password')}>Forgot your password ?</span>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
            <div className="p-social-account">
              <MDBRow>
                <MDBCol className="d-flex align-items-center" md="6">
                  <div className="text-center p-login-btn">
                    <MDBBtn type="submit">Login</MDBBtn>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <ul>
                    <li><span>or</span></li>
                    <li>
                      <MDBBtn className="tw" floating social="tw" size="md">
                        <MDBIcon fab icon="twitter" className="pr-1" />
                      </MDBBtn>
                    </li>
                    <li>
                      <MDBBtn className="fb" floating social="fb" size="md">
                        <MDBIcon fab icon="facebook-f" className="pr-1" />
                      </MDBBtn>
                    </li>
                    <li>
                      <MDBBtn className="gp" floating social="gp" size="md">
                        <MDBIcon fab icon="google-plus-g" className="pr-1" />
                      </MDBBtn>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </div>
          </form>
          <p className="text-center mb-2 mt-4 p-signup-today">Dont have an account ? <span className="grey-text"><u onClick={() => showModal('register_customer')}>Sign up today</u></span></p>  
      </div>  
    );
  }
}

export default LoginCustomerForm;