import React from 'react';
// React-bootstrap
import { Container } from 'react-bootstrap';
// Css module
import classNames from 'classnames/bind';
import styles from './_FormSection.module.scss';
import Button from '../button/Button';
const cx = classNames.bind(styles);
function FormSection() {
  return (
    <div className={cx('form-section', 'float-left', 'padding-bottom','padding-top', 'position-relative')}>
      <Container>
        <div className={cx('form-immter-sec', 'position-relative')}>
          <div className={cx('form-headings', 'text-center')}>
            <h5>Get in Touch</h5>
            <h2>Send us a Message</h2>
          </div>
          <div className={cx('form-text')}>
            <form className={cx('form-con')} action="">
              <ul className={cx('list-unstyleds')}>
                <li className={cx('float-left')}>
                  <input type="text" placeholder="Name" />
                </li>
                <li className={cx('float-left')}>
                  <input type="number" placeholder="Phone" />
                </li>
                <li className={cx('float-left')}>
                  <input type="email" placeholder="Email" />
                </li>
              </ul>
              <div className={cx('wrapper-textarea')}>
                <textarea placeholder="Message"></textarea>
              </div>
              <div className={cx('wrapper-button')}>
                <Button title="Send Now" hoverW/>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FormSection;
