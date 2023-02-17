import React from 'react'
// Css module
import classNames from 'classnames/bind';
import styles from './_StaticText.module.scss';
const cx = classNames.bind(styles);

function StaticText() {
  return (
    <div className={cx('static-text')}>
    <ul>
      <li>
        <div className={cx('static-price')}>200</div>
        <span>
          Project
          <br />
          Done
        </span>
      </li>
      <li>
        <div className={cx('static-price')}>100%</div>
        <span className={cx('width')}>
          Customer
          <br />
          Satisfication
        </span>
      </li>
      <li>
        <div className={cx('static-price')}>610</div>
        <span>
          Data
          <br />
          Analyst Input
        </span>
      </li>
      <li>
        <div className={cx('static-price')}>10+</div>
        <span>
          World Class
          <br />
          Base
        </span>
      </li>
    </ul>
  </div>
  )
}

export default StaticText