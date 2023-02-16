import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Css module
import classNames from 'classnames/bind';
import styles from './_Button.module.scss';
const cx = classNames.bind(styles);

function Button({ title, link, transparent,block,hoverW }) {
  const classes = cx('contactus', {
    transparent,
    block,
    hoverW
  });

  return (
    <div className={classes}>
      <Link to={link}>{title}</Link>
    </div>
  );
}

export default Button;
