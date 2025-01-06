import React from 'react'
import './Button.css';



function Button({Text, onClick, outLine}) {
    return (
      <div className={outLine ? "outLined-btn" : "btn"} onClick={() => onClick()}>{Text}</div>
  )
}

export default Button;
