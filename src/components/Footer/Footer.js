import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          
        <div className="col">
            <h2>Connecting Alumnus</h2>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h1>
        </div>
          
        <div className="col">
            <h2>Contact Details</h2>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
        </div>

        <div className="col">
            <h2>CONTENT</h2>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
        </div>
           
        <div className="col">
            <div>
                <p className="social-container">
                    <a
                    href="https://www.youtube.com/c/jamesqquick"
                    className="youtube social"
                    >
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a
                    href="https://www.facebook.com/learnbuildteach/"
                    className="facebook social"
                    >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a
                    href="http://www.instagram.com/larnbuildteach"
                    className="instagram social"
                    >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://wwww.twitter.com" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </p>
            </div>
        </div> 
    </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Connecting Alumnus | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;