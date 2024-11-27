import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const LoadButton = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleVerifyCaptcha = (value) => {
    setCaptchaVerified(value !== null);
  };

  const handleClick = () => {
    if (captchaVerified) {
      alert("Items Loaded!");
    } else {
      alert("Please complete the CAPTCHA!");
    }
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey="6Leyn4sqAAAAAMf_E8nLQyJj6jDaFB_vUhegW3dN"
        onChange={handleVerifyCaptcha}
      />
      <button onClick={handleClick}>Load Items</button>
    </div>
  );
};

export default LoadButton;
