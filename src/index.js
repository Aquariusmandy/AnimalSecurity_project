import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Header from "./Header";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <Header/>
    <About/>
    <Service/>
    <Footer/>
  </React.StrictMode>, document.querySelector("#root")
);