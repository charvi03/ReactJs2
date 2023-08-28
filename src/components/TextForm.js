import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("converted to Uppercase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleLpClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("converted to Lowercase", "success");
  };
  const handleClear = () => {
    let newText = " ";
    setText(newText);
    props.showalert("screen cleared", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied successfully", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("removed whitespaces", "success");
  };
  const [text, setText] = useState("Enter text here");
  //   Wrong way to change the state: text="new text"
  // correct way
  //   setText("new text");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#151B54" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "Grey" : "white",
              color: props.mode === "dark" ? "white" : "#151B54",
            }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLpClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#151B54" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it"}</p>
      </div>
    </>
  );
}
