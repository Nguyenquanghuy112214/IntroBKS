import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Css module
import classNames from 'classnames/bind';
import styles from './_Button.module.scss';
const cx = classNames.bind(styles);

function Button({ title, link, transparent,block,hoverW,hoverNone }) {
  const classes = cx('contactus', {
    transparent,
    block,
    hoverW,
    hoverNone
  });
const handleClick = () => {
  window.scrollTo(0, 0)
}
  return (
    <div onClick={handleClick} className={classes}>
      <Link to={link}>{title}</Link>
    </div>
  );
}

export default Button;
