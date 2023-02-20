import React, { useState } from 'react';

// Reacbootstap
import { Container, Row, Col } from 'react-bootstrap';

// Img
import img1 from '~/assets/img/about/about-us-sec-img.jpg';
import img2 from '~/assets/img/about/about-discussion-img.jpg';
import img3 from '~/assets/img/about/about-presentation-img.jpg';

// Css module
import classNames from 'classnames/bind';
import styles from './_AboutUsSection.module.scss';
import Button from '../button/Button';
const cx = classNames.bind(styles);

function AboutUsSection() {
  return (
    <Container>
      <Row>
        <Col lg={7} md={7}>
          <div className={cx('about-left-icon')}>
            <figure className={cx('position-relative')}>
              <img className={cx('about-img')} src={img1} alt="" />
            </figure>
            <figure>
              <img className={cx('about-left-img')} src={img3} alt="" />
            </figure>
            <div className={cx('about-video', 'position-relative')}>
              <div className={cx('wrapper-img')}>
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={5} md={5}>
          <div className={cx('about-right-con')}>
            <h5>About us</h5>
            <h2>We’re all About To Helping You</h2>
            <p>
              Duis aute irure dolor in reprehenderit in volupta velit cillum nulla paenostrud exercitation alias con sequatur aut
              perferendis doloribus asperiaut rerm necessitatibus saeo eveniet.
            </p>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihio quo minus maxime placeat facere.</p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700">
              <Button title="Get Started" link="/" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUsSection;
