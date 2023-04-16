import React from "react";
import classes from "./About.module.css";
import hero_illustration from "../../img/Hero_Illustration.svg";
import abs2 from "../../img/Abstract-02.svg";
import abs3 from "../../img/Abstract-03.svg";
import abs4 from "../../img/Abstract-04.svg";
import Button from "../UI/Button";
import me from "../../img/mine.png";

const About = () => {

    // const PDF_FILE_URL = "http://localhost:3000/aditya_resume.pdf"
    const downloadPdf = () => {
      // const fileName = url.split("/").pop(); 
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', fileName);
      // document.body.appendChild(link);
      // link.click();
      // link.remove();

    //   const url = 'http://localhost:3000/aditya_resume.pdf'; // Replace with your PDF file path
    // const link = document.createElement('a');
    // link.href = url;
    // link.setAttribute('download', 'aditya_resume.pdf');
    // document.body.appendChild(link);
    // link.click();
    // link.parentNode.removeChild(link);

    fetch('http://localhost:3000/aditya_resume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'aditya_resume.pdf';
          alink.click();
      })
  })
    };
  
  
  return (
    <div className={classes.hero_container} id="about">
      <div className={`container ${classes.hero_sec} py-5`}>
        <div className="row">
          <div className="col-md-6">
            <h1 className={`${classes.hero_title} display-5`}>
              Hello,
              <br /> I am <span>Aditya Ranjan</span>
            </h1>
            <div className={classes.intro_title}>
              <div className={classes.intro_wrapper}>
                <div className={classes.intro_item}>Front End Developer</div>
                <div className={classes.intro_item}>Web Designer</div>
                <div className={classes.intro_item}>Software Engineer</div>
              </div>
            </div>
            <div className={classes.headline_steps}>
              <div className={classes.headline_content}>
                <p className="text-muted mb-0">
                  Proficient Front End Developer with <strong>2.5 year</strong>  of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development.
                </p>
              </div>
              <div className={classes.headline_shape}></div>
            </div>
            <Button onClick={downloadPdf} className={`mt-4 ${classes.downld_btn}`}>Download CV</Button>
          </div>
          <div className={`col-md-6 ${classes.hero_img} d-none d-md-block`}>
            <img src={hero_illustration} alt="" className={classes.hero_img_illustration}/>
            <div>
          <img
            src={me}
            className={`${classes.intro_img}`}
            alt=""
          />
          </div>
          </div>
          
        </div>
      </div>
      <div className={classes.abstract_img_2}>
        <img src={abs2} alt="" />
      </div>
      <div className={classes.abstract_img_3}>
        <img src={abs3} alt="" />
      </div>
      <div className={classes.abstract_img_4}>
        <img src={abs4} alt="" />
      </div>
    </div>
  );
};

export default About;
