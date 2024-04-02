import React from "react";
import { Link } from "react-router-dom";

function LandingScreen() {
  return (
    <div
      className="landing-container"
      style={{
        width: "100vw",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div className="text-center">
        <div>
          <h2
            style={{
              color: "white",
              fontSize: "6vw",
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Welcome to SuiteSpot
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "3vw",
              marginBottom: "30px",
              maxWidth: "80%",
              margin: "0 auto",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            Experience luxury accommodation like never before. Book your dream
            room now!
          </p>
          <Link to="/login">
            <button
              className="btn btn-primary landingBtn"
              style={{
                fontSize: "2.5vw",
                padding: "15px 30px",
                borderRadius: "30px",
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
