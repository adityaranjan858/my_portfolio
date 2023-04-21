import React from 'react';
import classes from './Certifications.module.css'
import abs7 from "../../img/Abstract-07.svg";
import abs8 from "../../img/Abstract-08.svg";
import css_c from "../../img/css_c.png";
import html_l_c from "../../img/html.PNG";
import css_l_c from "../../img/Css.PNG";
import Row from './../UI/Row';
import Button from '../UI/Button';


const Certifications = () => {
  return (
    <div id='certifications' className={`mb-4 mt-5 ${classes.experience_container}`}>
      <div className={classes.abstract_img_7}>
        <img src={abs7} alt="" />
      </div>
      <h1 className="text-center mb-5 heading"> My Achievements & Certifications</h1>
      <Row className="justify-content-center">
        <div className={` col-xl-4 col-lg-6 my-4 col-12  ${classes.card_main} `}>
          <div className={classes["card-body-certification"]}>
            {/* Button to launch a modal Linkedin HTML Certificate*/}
            <img id="image" src={html_l_c} alt="" className={classes.img_Width} />
            <div class={classes.middle}>
            <span data-bs-toggle="tooltip" data-bs-placement="top" title="Maximize"> <Button type="button" data-bs-toggle="modal" data-bs-target="#linkedinHtmlC" className={`${classes["card-title"]}  heading`}><i class="fas fa-window-maximize"></i>
            </Button></span>
            </div>
          </div>
        </div>
        <div className={` col-xl-4 col-lg-6 my-4 col-12 ${classes.card_main} `}>
          <div className={classes["card-body-certification"]}>
            {/* Button to launch a modal Linkedin CSS Certificate*/}
            <img src={css_l_c} alt="" className={classes.img_Width} />
            <div class={classes.middle}>
            <span data-bs-toggle="tooltip" data-bs-placement="top" title="Maximize">
            <Button type="button" data-bs-toggle="modal" data-bs-target="#linkedinCssC" className={`${classes["card-title"]}  heading`}><i class="fas fa-window-maximize "></i>
            </Button>
            </span>
            </div>
          </div>
        </div>
        <div className={` col-xl-4 col-lg-6 my-4 col-12 ${classes.card_main} `}>
          <div className={classes["card-body-certification"]}>
            {/* Button to launch a modal HackerRank CSS Certificate*/}
            <img src={css_c} alt="" className={classes.img_Width} />
            <div class={classes.middle}>
            <span data-bs-toggle="tooltip" data-bs-placement="top" title="Maximize">
            <Button type="button" data-bs-toggle="modal" data-bs-target="#HackerRankCssC" className={`${classes["card-title"]}  heading`}><i class="fas fa-window-maximize"></i>
            </Button>
            </span>
            </div>
          </div>
        </div>
      </Row>
      <div className={classes.abstract_img_8}>
        <img src={abs8} alt="" />
      </div>


      {/* Modal HTML LinkedIn*/}
      <div className="modal fade" id="linkedinHtmlC" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className={`${classes.modalDialogeCertificate} modal-dialog`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">LinkedIn Skill Assessment badge for "HTML"</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img id="image" src={html_l_c} alt="" className={classes.modalImg_Width} />
            </div>
            <div className="modal-footer">
              <Button type="button" data-bs-dismiss="modal">Close</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal CSS LinkedIn*/}
      <div className="modal fade" id="linkedinCssC" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className={`${classes.modalDialogeCertificate} modal-dialog`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">LinkedIn Skill Assessment badge for "CSS"</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img id="image" src={css_l_c} alt="" className={classes.modalImg_Width} />
            </div>
            <div className="modal-footer">
              <Button type="button" data-bs-dismiss="modal">Close</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal CSS HackerRank*/}
      <div className="modal fade" id="HackerRankCssC" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className={`${classes.modalDialogeCertificate} modal-dialog`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">HackerRank Skills Certificate for "CSS"</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img id="image" src={css_c} alt="" className={classes.modalImg_Width} />
            </div>
            <div className="modal-footer">
              <Button type="button" data-bs-dismiss="modal">Close</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications;