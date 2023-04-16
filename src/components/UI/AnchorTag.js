import React from 'react'
import classes from './AnchorTag.module.css'

const AnchorTag = ({target, href, className, children}) => {
  return (
    <a href={href} target={target} className={`${className} ${classes.gen_link}`}>{children}</a>
  )
}

export default AnchorTag;