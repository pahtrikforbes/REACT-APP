import React, { Component } from "react";
import HeaderLogin from "../Header/HeaderLogin.js";
import ContentArea from "../ContentArea";
import Footer from "../Footer";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderLogin />
        <ContentArea />
        <Footer />
      </div>
    );
  }
}

export default App;
