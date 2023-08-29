import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({ message: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  //whther dark mode is enabled or not
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#151B54";
      showalert("Dark mode has been enabled", "success");
      document.title = "Text Utils - Dark mode";
      // setInterval(() => {
      //   document.title = "Text Utils - Dark mode";
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert(" mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About /> */}
        <TextForm
          heading="Enter the text to analyse below"
          mode={mode}
          showalert={showalert}
        />
      </div>

      {/* <Navbar /> */}
    </>
  );
}

export default App;
