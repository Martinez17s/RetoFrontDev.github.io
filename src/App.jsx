import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "./img/sendIcon.png";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const recaptchaRef = React.createRef();

  const handleCaptchaVerify = (value) => {
    if (value) {
      setCaptchaVerified(true);
      setShowCaptcha(false);
      setErrorMessage("");
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!captchaVerified) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    alert("Thank you for joining our newsletter!");
    setCaptchaVerified(false);
    setEmail("");
  };

  return (
    <>
      <section className="form">
        <div>
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="Logo"
              className="h-12"
              style={{ marginBottom: "20px" }}
            />
          </div>
          <h1 className="custom-heading">
            SUBSCRIBE
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4" style={{ marginBottom: "30px" }}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="input-underline"
                required
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}
            <button
              type="button"
              onClick={() => setShowCaptcha(true)}
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-full mb-4"
            >
              Verify CAPTCHA
            </button>
            <button
              type="submit"
              className="w-full py-3 bg-lime-500 text-black font-bold rounded-full hover:bg-lime-600 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>


      {showCaptcha && (
        <div className="captcha-modal">
          <div className="captcha-content">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptchaVerify}
            />
            <button
              onClick={() => setShowCaptcha(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <p className="footer">
        © 2025 Subscribe Form. All Rights Reserved. Design by EquipoDotGuru.
      </p>
    </>
  );
}

export default App;
