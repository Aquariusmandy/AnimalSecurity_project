import React from "react";
import ReactDOM from "react-dom";
// import Nav from "./homepage/Nav";
// import Header from "./homepage/Header";
// import About from "./homepage/About";
// import Service from "./homepage/Service";
// import Footer from "./homepage/Footer";



import App from "./App"



// const Homepage = ({PageIndex, setIndex,PageTest,setTest}) =>{
//   return(
  //   <React.StrictMode>
  //     <Nav PageIndex={PageIndex} setIndex={setIndex} PageTest={PageTest} setTest={setTest}/>
  //     <Header/>
  //     <About/>
  //     <Service/>
  //     <Footer/>
  // </React.StrictMode>
//   <HomePage/>
//   );
// };

// const Testpage =()=>{
//   return(
//     <AppTest/>
//   );
// };

// const Display =()=>{
//   const [PageIndex, setIndex] = useState(true);
//   const [PageTest, setTest] = useState(false);

//   return<>
//     {PageIndex? <Homepage 
//       PageIndex={PageIndex} setIndex={setIndex}
//       PageTest={PageTest} setTest={setTest}/>:<></>}
//     {PageTest? <Testpage />:<></>}

//   </>

// }

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>, document.querySelector("#root")
);