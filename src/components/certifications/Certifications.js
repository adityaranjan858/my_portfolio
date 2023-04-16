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
      <Row>
        <div className={`  col-4  ${classes.card_main} `}>
          <div className={classes["card-body-certification"]}>
            {/* Button to launch a modal Linkedin HTML Certificate*/}
            <Button type="button" data-bs-toggle="modal" data-bs-target="#linkedinHtmlC" className={`${classes["card-title"]}  heading`}>HTML Certificate
            </Button>
            <img id="image" src={html_l_c} alt="" className={classes.img_Width} />
          </div>
        </div>
        <div className={`  col-4  ${classes.card_main} `}>
          <div className={classes["card-body-certification"]}>
            {/* Button to launch a modal Linkedin CSS Certificate*/}
            <Button type="button" data-bs-toggle="modal" data-bs-target="#linkedinCssC" className={`${classes["card-title"]}  heading`}>CSS Certificate
            </Button>
            <img src={css_l_c} alt="" className={classes.img_Width} />
          </div>
        </div>
        <div className={` col-4 ${classes.card_main} `}>
          <div className={classes["card-body-certification"]}>
            {/* Button to launch a modal HackerRank CSS Certificate*/}
            <Button type="button" data-bs-toggle="modal" data-bs-target="#HackerRankCssC" className={`${classes["card-title"]}  heading`}>HackerRank CSS Certificate
            </Button>
            <img src={css_c} alt="" className={classes.img_Width} />
          </div>
        </div>
      </Row>
      <div className={classes.abstract_img_8}>
        <img src={abs8} alt="" />
      </div>


      {/* Modal HTML LinkedIn*/}
      <div class="modal fade" id="linkedinHtmlC" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class={`${classes.modalDialogeCertificate} modal-dialog`}>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">LinkedIn Skill Assessment badge for "HTML"</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img id="image" src={html_l_c} alt="" className={classes.modalImg_Width} />
            </div>
            <div class="modal-footer">
              <Button type="button" data-bs-dismiss="modal">Close</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal CSS LinkedIn*/}
      <div class="modal fade" id="linkedinCssC" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class={`${classes.modalDialogeCertificate} modal-dialog`}>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">LinkedIn Skill Assessment badge for "CSS"</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img id="image" src={css_l_c} alt="" className={classes.modalImg_Width} />
            </div>
            <div class="modal-footer">
              <Button type="button" data-bs-dismiss="modal">Close</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal CSS HackerRank*/}
      <div class="modal fade" id="HackerRankCssC" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class={`${classes.modalDialogeCertificate} modal-dialog`}>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">HackerRank Skills Certificate for "CSS"</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img id="image" src={css_c} alt="" className={classes.modalImg_Width} />
            </div>
            <div class="modal-footer">
              <Button type="button" data-bs-dismiss="modal">Close</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications;