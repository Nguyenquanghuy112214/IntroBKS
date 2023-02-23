import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import icon1 from '~/assets/img/contact/information-sec-img.jpg';
import icon2 from '~/assets/img/contact/info-location-img.png';
import icon3 from '~/assets/img/contact/info-phone-img.png';
import icon4 from '~/assets/img/contact/info-mail-img.png';

// Css module
import classNames from 'classnames/bind';
import styles from './_AddressSection.module.scss';
const cx = classNames.bind(styles);

const AddressSection = () => {
  const data = [
    {
      id: 1,
      icon: icon2,
      title: 'Location:',
      subtitle1: '121 King Street Melbourne, 3000,Australia',
      subtitle2: '',
      style: 'fade-down',
    },
    {
      id: 2,
      icon: icon3,
      title: 'Phone:',
      subtitle1: '6138 376 6384',
      subtitle2: '800 2345 6789',
    },
    {
      id: 3,
      icon: icon4,
      title: 'Email:',
      subtitle1: 'info@finazo.com',
      subtitle2: 'finazo@gmail.com',
      style: 'fade-up',
    },
  ];
  return (
    <Container className={cx('ctn-address')}>
      <Row>
        <Col lg={7} md={7} sm={12} className={cx('ps-0', 'pe-0')}>
          <div className={cx('info')}>
            <figure>
              <img src={icon1} alt="" />
            </figure>
          </div>
        </Col>
        <Col lg={5} md={5} sm={12} className={cx('ps-0', 'pe-0')}>
          <div className={cx('adress-right-sec')}>
            {data !== undefined &&
              data.map((item, index) => {
                return <AddressBox key={index} data={item} />;
              })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddressSection;
export const AddressBox = ({ data }) => {
  return (
    <div data-aos-duration="700" data-aos={data.style} className={cx('address-box')}>
      <figure className={cx('wrapper-img')}>
        <img src={data.icon} alt="" />
      </figure>
      <div className={cx('info-right-text')}>
        <h4>{data.title}</h4>
        <p>
          {data.subtitle1}
          <br />
          {data.subtitle2}
        </p>
      </div>
    </div>
  );
};
