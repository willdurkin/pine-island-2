import "./styles.css";
import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
