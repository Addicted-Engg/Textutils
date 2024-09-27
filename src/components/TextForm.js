import React, { useState } from "react";

export default function TextForm(props) {
  const handeOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Congrats, Converted to Uppercase","success")
  };

  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Congrats, Converted to Lowercase","success")
  };

  const clear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared","danger")
  };

  const handleBoldClick = () => {
    setIsBold(!isBold); // Toggle boldness
    props.showAlert(isBold ? "UnBolded":"Bolded" ,"warning")
  };

  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false); // New state to track boldness

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'grey'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handeOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white', fontWeight: isBold ? "bold" : "normal",color: props.mode==='dark'?'white':'grey' }}
            id="myBox"
            rows="8"
           // Apply bold based on state
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLwClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleBoldClick}>
          {isBold ? "Unbold Text" : "Bold Text"}
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'grey'}}>
        <h1>Your text summary</h1>
        <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>You have {text.trim() === '' ? 0 : 0.008 * text.split(" ").length * 60} Seconds to read it</p>
        <h2>Preview</h2>
        <p style={{ fontWeight: isBold ? "bold" : "normal" }}>{text.length>0?text:"Write something to see"}</p>
      </div>
    </>
  );
}