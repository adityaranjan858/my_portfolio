import React from 'react'
import classes from './Projects.module.css'
import Row from '../UI/Row';
import Card from '../UI/Card';
import proj1 from "../../img/newsApp.PNG"
import proj2 from "../../img/textUtils.PNG"
import proj3 from "../../img/krsFinivia.PNG"
import AnchorTag from './../UI/AnchorTag';

const Project = () => {
  return (
    <section className={classes.services_container} id="projects">
    <div className={`container ${classes.projects_contents}`}>
      <h1 className='heading mb-5'>Projects</h1>
      <Row className="justify-content-center ">
        <div className='col-xl-4 col-lg-6 my-4 col-12'>
        <Card className={classes.zoom_p}  >
          <div className={classes.zoom}>
          <img src={proj1} alt="" />
          </div>
          <h3 className='mt-4'>News App</h3>
          <p>In this news app, We can read latest news on the basis of category like Business, Sports, General, Science etc.</p>
          <AnchorTag href="https://github.com/adityaranjan858/news/tree/master" target='blank'>GitHub</AnchorTag>
          
        </Card>
        </div>
        <div className='col-xl-4 col-lg-6 my-4 col-12'>
        <Card className={classes.zoom_p} >
          <img src={proj2} alt="" />
          <h3 className='mt-4'>Text Utils</h3>
          <p>TextUtils transform text to as uppercase, captalize, inverse capitalize, copy text etc. Also, Be it word count, character count etc.</p>
          <AnchorTag href="https://github.com/adityaranjan858/TextUtils" target='blank'>GitHub</AnchorTag>
          <AnchorTag href="https://adityaranjan858.github.io/TextUtils/" target='blank'>Demo</AnchorTag>
        </Card>
        </div>
        <div className='col-xl-4 col-lg-6 my-4 col-12'>
        <Card className={classes.zoom_p} >
          <img src={proj3} alt="" />
          <h3 className='mt-4'>KRS Finivia</h3>
          <p>I have designed a website that meets the company's requirements and effectively communicates their message to potential clients.</p>
          <AnchorTag href="https://github.com/adityaranjan858/krs_finivia" target='blank'>GitHub</AnchorTag>
          <AnchorTag href="https://adityaranjan858.github.io/krs_finivia/" target='blank'>Demo</AnchorTag>
        </Card>
        </div>
      </Row>
    </div>
  </section>
  )
}

export default Project;