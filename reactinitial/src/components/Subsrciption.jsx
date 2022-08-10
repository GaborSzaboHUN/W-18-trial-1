import React, { useEffect, useState } from "react";

function Subsrciption() {
  const [isButtonText, setButtonText] = useState("Subscribe to our newsletter");
  const [isVisible, setVisible] = useState(true);
  const [email, setEmail] = useState("");

  // - - - - Post request - NOT READY
  useEffect(() => {
    fetch("https://demoapi.com/api/series/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "email" }),
    });
  }, []);

  // - - - - Validate email address

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const changeHandler = (event) => {
    if (!isValidEmail(event.target.value)) {
      alert("Email is invalid");
    }
    setEmail(event.target.value);
  };

  const buttonTextHandler = () => {
    if (isButtonText === "Subscribe to our newsletter") {
      setButtonText("Subscribed");
    }
    setTimeout(() => {
      setButtonText("Subscribe to our newsletter");
    }, 10000);
  };

  return (
    <div className={isVisible ? "" : "hidden"}>
      <input type="email" name="email" value={email} onChange={changeHandler} />
      <button onClick={buttonTextHandler}>{isButtonText}</button>
    </div>
  );
}

export default Subsrciption;
