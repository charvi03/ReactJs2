import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" />
      <div className="container my-3">
        {/* <About /> */}
        <TextForm heading="Enter the text to analyse below" />
      </div>

      {/* <Navbar /> */}
    </>
  );
}

export default App;
