import React, { useState } from "react";
import "./Partner.css";
import { useNavigate } from "react-router-dom";

const Partner = () => {
  let [phoneOrId, setPhoneOrId] = useState("");
  let navigate = useNavigate();

  let submitForm = (e) => {
    e.preventDefault();

    let cleaned = phoneOrId.trim();
    if (!cleaned) return;

    navigate("/partner-info", { state: { phoneOrId: cleaned } });
  };

  return (
    <div className="partner-container">
      <div className="partner-bg-overlay"></div>

      <div className="partner-content">
        <div className="partner-left">
          <div className="partner-logo-section">
            <div className="partner-logo">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="partner-banner-text">PARTNER WITH CRAZY CRAVINGS!</p>
          </div>
          <div className="partner-heading">
            <h1>Access to CrazyCravings tools and support</h1>
          </div>
          <div className="partner-steps-section">
            <p className="partner-steps-intro">In just 3 easy steps</p>
            <h2>Get your restaurant delivery-ready in 24hrs!</h2>
            <div className="partner-steps">
              <div className="partner-step">
                <div className="partner-step-number">
                  <span className="partner-step-dot"></span>
                  <span className="partner-step-label">STEP 1</span>
                </div>
                <h3>Install the CrazyCravings Owner App</h3>
              </div>
              <div className="partner-step">
                <div className="partner-step-number">
                  <span className="partner-step-dot"></span>
                  <span className="partner-step-label">STEP 2</span>
                </div>
                <h3>Login/Register using your phone number</h3>
              </div>
              <div className="partner-step">
                <div className="partner-step-number">
                  <span className="partner-step-dot"></span>
                  <span className="partner-step-label">STEP 3</span>
                </div>
                <h3>Enter restaurant details</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="partner-right">
          <div className="partner-form-box">
            <h2>Get Started</h2>

            <p className="partner-form-desc">
              Enter a mobile number or restaurant ID to continue
              <span className="partner-info-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="1" />
                  <path
                    d="M8 4V8M8 12H8.01"
                    stroke="#999"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </p>

            <form className="partner-form" onSubmit={submitForm}>
              <input
                type="tel"
                placeholder="Enter Restaurant ID / Mobile number"
                className="partner-input"
                required
                maxLength={10}
                value={phoneOrId}
                onChange={(e) => setPhoneOrId(e.target.value)}
              />

              <button type="submit" className="partner-continue-btn">
                Continue
              </button>
            </form>

            <p className="partner-terms">
              By logging in, I agree to CrazyCravings's{" "}
              <a href="#" className="partner-terms-link">
                terms & conditions
              </a>
            </p>
          </div>

          <div className="partner-documents">
            <h3>
              For an easy form filling process, you can keep these documents
              handy.
            </h3>
            <ul className="partner-doc-list">
              <li>
                <span className="partner-bullet">•</span> FSSAI License copy{" "}
                <a href="#" className="partner-apply-link">
                  Apply Here
                </a>
              </li>
              <li>
                <span className="partner-bullet">•</span> Your Restaurant menu
              </li>
              <li>
                <span className="partner-bullet">•</span> Bank details
              </li>
              <li>
                <span className="partner-bullet">•</span> GSTIN{" "}
                <a href="#" className="partner-apply-link">
                  Apply Here
                </a>
              </li>
              <li>
                <span className="partner-bullet">•</span> PAN card copy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
