import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {
  const rgbValue = rgb.join(',');
  const [alert,setAlert] = useState(false);
  const hexValue = rgbToHex(...rgb);
  const handleClick= () =>{
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }
  return (
    <article
     className={`color ${index>10 && 'color-light'}`}
     style={{backgroundColor : `rgb(${rgbValue})`}}
     onClick={handleClick}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
