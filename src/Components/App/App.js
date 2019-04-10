import React, { Component } from "react";
import Header from "../Header";
import ContentArea from "../ContentArea";
import Footer from "../Footer";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentArea />
        <Footer />
      </div>
    );
  }
}

export default App;
