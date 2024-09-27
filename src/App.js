import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import Crout from "./components/Crout"
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is set or not
  const [alert,setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove("bg-light")
  //   document.body.classList.remove("bg-dark")
  //   document.body.classList.remove("bg-warning")
  //   document.body.classList.remove("bg-info")
  //   document.body.classList.remove("bg-success")
  //   document.body.classList.remove("bg-danger")
  // }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="#052554"
      showAlert("Dark mode has been enabled", "success");

    } else {
      setMode('light');
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
        <Route exact path="/about" element={<Crout/>}/>
        
        <Route exacxt path="/" element={}/>

      </Routes> */}
      <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyse below" />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
