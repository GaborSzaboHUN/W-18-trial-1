import React, { useState } from "react";
import "./Characters.css";

function Characters({ name, details }) {
  const [isVisible, setVisible] = useState(false);
  const [isButtonText, setButtonText] = useState("Show more");

  const textChange = () => {
    if (isButtonText === "Show more") {
      setButtonText("Show less");
    } else {
      setButtonText("Show more");
    }
  };

  const handleVisibility = () => {
    setVisible(!isVisible);
    textChange();
  };

  return (
    <>
      <h2>{name}</h2>
      <p className={isVisible ? "" : "hidden"}>{details}</p>
      <button onClick={handleVisibility}>{isButtonText}</button>
    </>
  );
}

export default Characters;
