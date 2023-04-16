import React from 'react';
import classes from './Button.module.css'
const Button = (props) => {
  return (

    <button className={`${props.className} btn ${classes.gen_btn}`} type={props.type} onClick={props.onClick} data-bs-toggle={props["data-bs-toggle"]} data-bs-target={props["data-bs-target"]} data-bs-dismiss={props["data-bs-dismiss"]}>
                {props.children}
              </button>
  )
}

export default Button;