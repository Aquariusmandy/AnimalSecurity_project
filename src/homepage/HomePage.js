import React from 'react'
import Header from "./Header";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <React.StrictMode>
        <Header/>
        <About/>
        <Service/>
        <Footer/>   
    </React.StrictMode>

  )
}

export default HomePage