import React from "react";
import "./style.css";
import { slideshowText } from "./data";

function Slideshow({ subheadering1, heading, subheading }) {
  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="slideshow-text">
              <h6>{slideshowText.subheadering1}</h6>
              <h3>{slideshowText.heading}</h3>
              <p>{slideshowText.subheading}</p>
              <button className="btn about-btn mt-5 mb-5">About Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Slideshow;
