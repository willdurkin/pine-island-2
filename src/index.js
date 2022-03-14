import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from './Components/ScrollToTop';



const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
      <ScrollToTop />

      <App />

  </Router>,

  rootElement
);
