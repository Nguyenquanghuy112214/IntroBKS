import React from 'react';
// React-bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// Components
import Button from '../button/Button';
// Css module
import classNames from 'classnames/bind';
import styles from './_BusinessSection.module.scss';
const cx = classNames.bind(styles);

function BusinessSection() {
  return (
    <Container className={cx('container-content')}>
      <Row className={cx('justify-content-center')}>
        <Col xxl={10} xl={10} lg={10} md={9} xs={12}>
          <div className={cx('wrapper-content')}>
            <h1 data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700" className={cx('main-content')}>
              Improve & Innovate
              <br />
              Business Trends
            </h1>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700" className={cx('sub-content', 'white')}>
              Duis aute irure dolor in reprehenderit in voluptate velit cillum
              <br />
              nulla pariatur nostrud exercitation.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700" className={cx('wrapper-button')}>
              <Button title="Get Started" link="/" />
              <Button title="Learn More" link="/" transparent />
            </div>
          </div>
        </Col>
      </Row>
     
    </Container>
  );
}

export default BusinessSection;
