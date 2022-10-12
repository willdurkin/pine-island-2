import "./styles.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import MobileHeader from "./Components/MobileHeader";
import Main from "./Components/Main";
import Footer from './Components/Footer';


export default function App() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const windowWidth = window.innerWidth;

  useEffect (()=>{
      const handleResizeWindow = () => setWidth(window.innerWidth);
      // subscribe to window resize event "onComponentDidMount"
      window.addEventListener("resize", handleResizeWindow);
  },[windowWidth])

  return (
    <div className="App">
      { window.innerWidth > 1115 ? ( <Header /> ) : ( <MobileHeader /> ) }
      <Main />
      <Footer />
    </div>
  );
}
