import React, { useState } from 'react';

// Css module
import classNames from 'classnames/bind';
import styles from './_IconClose.module.scss';
const cx = classNames.bind(styles);

function IconClose() {
  const [active, setActive] = useState(false);
  return (
    <div onClick={() => setActive(!active)} className={cx('show-menu', 'nav__toggler')}>
      <div className={active ? cx('line1', 'active') : cx('line1')}></div>
      <div className={active ? cx('line2', 'active') : cx('line2')}></div>
      <div className={active ? cx('line3', 'active') : cx('line3')}></div>
    </div>
  );
}

export default IconClose;
