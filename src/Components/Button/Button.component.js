import './Button.component.css';
import React from 'react';
import PropTypes from 'prop-types';

const changeColor = {
  color: 'black',
};

const Button = ({ onClick, buttonText }) => {
  // console.log(onClick);
  const onClickChange = () => () => {
    onClick();
  };
  return (
    <button type="button" className="style" style={changeColor} onClick={onClickChange()}>{buttonText}</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
