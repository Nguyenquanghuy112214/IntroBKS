import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Reacbootstap
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Button from '~/libraries/components/button/Button';
// Img
import icon1 from '~/assets/img/home/service-icon1.png';
import icon2 from '~/assets/img/home/service-icon2.png';
import icon3 from '~/assets/img/home/service-icon3.png';
import icon4 from '~/assets/img/home/service-icon4.png';
// React-icon
import { BsArrowRightShort } from 'react-icons/bs';
// Css module
import classNames from 'classnames/bind';
import styles from './_ServicesSection.module.scss';
const cx = classNames.bind(styles);

function ServicesSection() {
  const data = [
    {
      id: 1,
      title: 'Business Growth',
      subtitle1: 'Nostrud exercitation alia',
      subtitle2: 'consequatur auor...',
      icon: icon1,
      style: 'fade-down',
    },
    {
      id: 2,
      title: 'Marketing Advices',
      subtitle1: 'Nostrud exercitation alia',
      subtitle2: 'consequatur auor...',
      icon: icon2,
      style: 'fade-down',
    },
    {
      id: 3,
      title: 'Finance Consulting',
      subtitle1: 'Nostrud exercitation alia',
      subtitle2: 'consequatur auor...',
      icon: icon3,
      style: 'fade-up',
    },
    {
      id: 4,
      title: 'Wealth Management',
      subtitle1: 'Nostrud exercitation alia',
      subtitle2: 'consequatur auor...',
      icon: icon4,
      style: 'fade-up',
    },
  ];
  return (
    <Container className={cx('ctn-services')}>
      <Row>
        <Col lg={4} md={4} className={cx('ps-0', 'pe-0')}>
          <div data-aos="fade-right" data-aos-duration="700" className={cx('service-left-sec')}>
            <h5 className={cx('white')}>What We Do</h5>
            <h2 className={cx('white')}>
              Services we
              <br />
              Provide
            </h2>
            <p className={cx('white')}>
              Quis autem vel eum iure repren
              <br />
              derit qui in ea voluptate velit as
              <br />
              se ruam nihil molestiae....
            </p>
            <Button title="Get Started" link="/" hoverW />
          </div>
        </Col>
        <Col lg={8} md={8} className={cx('ps-0', 'pe-0')}>
          <div className={cx('service-right-sec')}>
            {data !== undefined &&
              data.map((item, index) => {
                return (
                  <ServiceBox
                    key={index}
                    title={item.title}
                    subtitle1={item.subtitle1}
                    subtitle2={item.subtitle2}
                    style={item.style}
                    icon={item.icon}
                  />
                );
              })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicesSection;

export const ServiceBox = ({ title, subtitle1, subtitle2, style, icon }) => {
  return (
    <div data-aos-duration="700" data-aos={style} className={cx('service-box')}>
      <figure className={cx('wrapper-img')}>
        <img src={icon} alt="" />
      </figure>
      <div className={cx('service-box-text')}>
        <h4>{title}</h4>
        <p>
          {subtitle1}
          <br />
          {subtitle2}
        </p>
      </div>
      <div className={cx('wrapper-icon')}>
        <Link to="/">
          <BsArrowRightShort />
        </Link>
      </div>
    </div>
  );
};
