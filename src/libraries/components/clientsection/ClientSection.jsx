import React from 'react';

// React bootstrap
import { Container, Row, Col } from 'react-bootstrap';

import anh1 from '~/assets/img/about/craft-logo.png';
import anh2 from '~/assets/img/about/hyper-logo.png';
import anh3 from '~/assets/img/about/haus-logo.png';
import anh4 from '~/assets/img/about/hype-logo.png';
import anh5 from '~/assets/img/about/minimum.png';
import anh6 from '~/assets/img/about/power-logo.png';
import anh7 from '~/assets/img/about/logo.png';
import anh8 from '~/assets/img/about/winner-logo.png';
// Css module
import classNames from 'classnames/bind';
import styles from './_ClientSection.module.scss';

const cx = classNames.bind(styles);
const ClientSection = () => {
  const data = [
    {
      id: 1,
      img: anh1,
    },
    {
      id: 2,
      img: anh2,
    },
    {
      id: 3,
      img: anh3,
    },
    {
      id: 4,
      img: anh4,
    },
    {
      id: 5,
      img: anh5,
    },
    {
      id: 6,
      img: anh6,
    },
    {
      id: 7,
      img: anh7,
    },
    {
      id: 8,
      img: anh8,
    },
  ];
  return (
    <div className={cx('client')}>
      <Container>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700">
          <h5>Our Clients</h5>
          <h2>Trusted by World’s Best Companies</h2>
        </div>
        <Row>
          {data !== undefined &&
            data.map((item, index) => {
              return <ClientItem key={index} data={item} />;
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ClientSection;
export const ClientItem = ({ data }) => {
  return (
    <Col xxl={3} xl={3} lg={3} md={6} className={cx('company-row')}>
      <div className={cx('company-logo')}>
        <figure>
          <img src={data.img} alt="" />
        </figure>
      </div>
    </Col>
  );
};
