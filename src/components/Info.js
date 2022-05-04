import React from "react";
import Email from "../img/Mail.png";
import linkedin from "../img/linkedin.png";
import ME from "../img/me.jpg";
export default function Info() {
  return (
    <>
      <img src={ME} alt="Mac Image" className="img__info" />
      <div className="container__info">
        <h3>Halid Macalangcom</h3>
        <h4>Frontend Developer</h4>
        <span>vmhunter.com</span>
        <div className="btn__info">
          <button className="email">
            <img src={Email} alt="email" />
            Email
          </button>
          <button className="linkedin">
            <img src={linkedin} alt="linkedin" />
            LinkedIn
          </button>
        </div>
      </div>
    </>
  );
}
