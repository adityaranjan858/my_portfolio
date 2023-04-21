import React from "react";
import classes from "./Footer.module.css";
import illustration_contact from "../../img/Illustration_Contact.svg";

const Footer = () => {
  return (
    <footer id="contacts" className={`pt-5 ${classes["section-footer"]}`}>
      <div className="container ">
        <h1 className={`hero_title heading ${classes.footer_heading}`}>Get in Touch</h1>
        <div className="row justify-content-center">
          <div className={`col-md-4 col-sm-12 col-12 d-sm-flex d-md-block justify-content-sm-between align-items-center ${classes.footer_text}`}>
            <div>
              <ul className={classes.address}>
                <li><span className="text-muted">Email : </span>adityaranjan858@gmail.com</li>
                <li><span className="text-muted">Mobile No. : </span>9144154686</li>
                <li><span className="text-muted">Location : </span>Hyderabad</li>
              </ul>
              <p className="text-dark">
                <strong><i>AD</i></strong>  stands for Aditya Design.
              </p>
            </div>

            <div className={`${classes['basr-social-share']} ${classes.social}`}>
              <ul className="">
                <li>
                  <a className={classes.facebook} target="_blank" href="https://www.facebook.com/adityaranjan858/">
                    <i className="fab fa-facebook-f"></i>
                    <span>Facebook</span>
                  </a>
                </li>

                <li>
                  <a className={classes.twitter} target="_blank" href="https://api.whatsapp.com/send?phone=9144154686&text=Please%20Contact%20Me">
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                </li>

                <li>
                  <a className={classes.linkedin} target="_blank" href="https://www.linkedin.com/in/aditya-ranjan-7b1785203">
                    <i className="fab fa-linkedin-in"></i>
                    <span>Linkedin</span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div className={`col-md-8 col-12 d-none d-md-block ${classes.footer_img}`}>
            <img src={illustration_contact} alt="" />
          </div>
          <p className='text-center text-dark mb-0'>
            <small>&copy; A-Design. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
