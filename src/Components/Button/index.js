import './Button.css';
import React from 'react';

const changeColor = {
  color: 'black',
}

const Button = (props)=>{
  return (
  <button type="button" className = "style" style={changeColor}  onClick={props.onClick}>{props.buttonText}</button>
  );
}

export default Button