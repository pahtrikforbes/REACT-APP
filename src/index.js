import React from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Components/App/index.css";
import App from "./Components/App/App";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <BrowserRouter><App /></BrowserRouter> , document.getElementById('root'));

registerServiceWorker();
