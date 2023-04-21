import React from 'react'

const Row = (props) => {
  return (
    <div className="container">
    <div className={`row ${props.className}`}>
        {props.children}
    </div>
</div>
  )
}

export default Row;