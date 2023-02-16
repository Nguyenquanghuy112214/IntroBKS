import React from 'react';

// Components
import AboutSection from '~/libraries/components/aboutsection/AboutSection';
import ServicesSection from '~/libraries/components/servicessection/ServicesSection';
import BusinessSection from '~/libraries/components/businesssection/BusinessSection';

// Css module
import classNames from 'classnames/bind';
import styles from './_HomePage.module.scss';
import { Container } from 'react-bootstrap';
const cx = classNames.bind(styles);

export default function HomePage() {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="700" className={cx('padding-top')}>
        <AboutSection />
      </div>
      <div className={cx('padding-top', 'padding-bottom', 'sevices')}>
        <ServicesSection />
      </div>
      <div className={cx('padding-top', 'padding-bottom', 'business-sec')}>
        <BusinessSection />
      </div>
      <Container >
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
      </Container>
    </>
  );
}
