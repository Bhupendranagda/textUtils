import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleClearText = (e) => {
    setText("");
  };

  const handleCopy = () => {
    let wholeText = document.getElementById("myBox");
    wholeText.select();
    navigator.clipboard.writeText(wholeText.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <div className="mb-3 my-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
          <button onClick={handleUpClick} className="my-3 btn btn-primary mx-1">
            Convert To Uppercase
          </button>
          <button onClick={handleLoClick} className="my-3 btn btn-primary mx-1">
            Convert To Lowercase
          </button>
          <button
            onClick={handleClearText}
            className="my-3 btn btn-primary mx-1"
          >
            Clear Text
          </button>
          <button onClick={handleCopy} className="my-3 btn btn-primary mx-1">
            Copy Text
          </button>
          <button
            onClick={handleExtraSpace}
            className="my-3 btn btn-primary mx-1"
          >
            Remove Extra Space
          </button>
        </div>
      </div>
      <div>
        <h1 style={{ color: `${props.mode === "light" ? "black" : "white"}` }}>
          Text Summary
        </h1>
        <p style={{ color: `${props.mode === "light" ? "black" : "white"}` }}>
          {text.split(" ").length} words and {text.length} letter
        </p>
        <p style={{ color: `${props.mode === "light" ? "black" : "white"}` }}>
          {0.008 * text.split(" ").length} Minutes read
        </p>
        <h2 style={{ color: `${props.mode === "light" ? "black" : "white"}` }}>
          Preview
        </h2>
        <p style={{ color: `${props.mode === "light" ? "black" : "white"}` }}>
          {text}
        </p>
      </div>
    </>
  );
}
