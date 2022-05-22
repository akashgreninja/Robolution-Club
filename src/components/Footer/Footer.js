import React from "react";
import "./Footer.css";
import "./responsive.css";
import img from "../Navbar/robolution.png";
import insta from "../Footer/instagram.png";
import facebook from "../Footer/facebook.png";
import linkedin from "../Footer/linkedin.png";
import twitter from "../Footer/twitter.png";
export default function Footer() {
  return (
    <footer>
      {/* <div className="footer">
        <div class="row align-items-start">
        <div class="col-5">
          <div className="socials">
          <a href="/" className='footer-a'><img className="small-png" src={insta} alt="nil" /></a>
          <a href="/" className='footer-a'><img className="small-png" src={facebook} alt="nil" /></a>
          <a href="/" className='footer-a'><img className="small-png" src={linkedin} alt="nil" /></a>
          <a href="/" className='footer-a'><img className="small-png" src={twitter} alt="nil" /></a>
          </div>
          </div>
          <div class="col-lg-4 ">
          <div className="con">
          
            <ul className='navbar-nav footer-ul'>
            <li className='footer-li'><a href='/' className='nav-link '>Contact Us</a></li>
            <li className='footer-li'><a href='/' className='nav-link '>Join Us</a></li>
            </ul>
            </div>
            </div>
            <div class="col-lg-3  ">

            <a href="/"><img className="roboimg-1" src={img} alt="nil" /></a>
            </div>

            <div class=" tetera">
              @ 2022 Robolution Club of BIT
            </div> */}

      {/* </div>

       
        
        
        </div> */}
      <div className="footer">
        <div class="row align-items-center">
          <div class="col">
            <div className="socials">
              <a href="/" className="footer-a">
                <img className="small-png" src={insta} alt="nil" />
              </a>
              <a href="/" className="footer-a">
                <img className="small-png" src={facebook} alt="nil" />
              </a>
              <a href="/" className="footer-a">
                <img className="small-png" src={linkedin} alt="nil" />
              </a>
              <a href="/" className="footer-a">
                <img className="small-png" src={twitter} alt="nil" />
              </a>
            </div>
          </div>
          <div class="col-lg-2 ">
            <div className="con">
              <ul className="navbar-nav footer-ul">
                <li className="footer-li">
                  <a href="/" className="nav-link ">
                    Contact Us
                  </a>
                </li>
                <li className="footer-li">
                  <a href="/" className="nav-link ">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col image-toru">
            
              <a href="/">
                <img className="roboimg-1" src={img} alt="nil" />
              </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
