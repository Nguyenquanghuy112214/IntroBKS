import React from 'react';

// React bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// Router
import { Link } from 'react-router-dom';
// React-icon
import { BsArrowRightShort } from 'react-icons/bs';
// React-icons
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

// Img
import anh1 from '~/assets/img/team/rayan-img.jpg';
import anh2 from '~/assets/img/team/brian-img.jpg';
import anh3 from '~/assets/img/team/mike-img.jpg';
import anh4 from '~/assets/img/team/rosalind-img.jpg';
import anh5 from '~/assets/img/team/cindy-img.jpg';
import anh6 from '~/assets/img/team/cindy-img.jpg';
// Css module
import classNames from 'classnames/bind';
import styles from './_StaffSection.module.scss';
import Button from '../button/Button';
const cx = classNames.bind(styles);
function StaffSection() {
  const data = [
    {
      id: 1,
      title: 'Rayan Collins',
      subtitle: 'Consultant',
      img: anh1,
    },
    {
      id: 2,
      title: 'Rayan Collins',
      subtitle: 'Consultant',
      img: anh2,
    },
    {
      id: 3,
      title: 'Rayan Collins',
      subtitle: 'Consultant',
      img: anh3,
    },
    {
      id: 4,
      title: 'Rayan Collins',
      subtitle: 'Consultant',
      img: anh4,
    },
    {
      id: 5,
      title: 'Rayan Collins',
      subtitle: 'Consultant',
      img: anh5,
    },
    {
      id: 6,
      title: 'Rayan Collins',
      subtitle: 'Consultant',
      img: anh6,
    },
  ];
  return (
    <div className={cx('team-sec')}>
      <Container>
        <div className={cx('team-inner-sec')}>
          <div className={cx('team-heading')}>
            <h5>Our Staff</h5>
            <h2>Our Team Members</h2>
          </div>
          <div className={cx('team-sections')}>
            <Row>
              {data !== undefined &&
                data.map((item, index) => {
                  return <StaffItem key={index} data={item} />;
                })}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StaffSection;

export const StaffItem = ({ data }) => {
  return (
    <Col xxl={4} xl={4} lg={4} md={4}>
      <div className={cx('team-report')}>
        <figure>
          <img src={data.img} alt="" />
        </figure>
        <div className={cx('team-text')}>
          <h4>{data.title}</h4>
          <span>{data.subtitle}</span>
          <ul className={cx('list-unstyled')}>
            <li className={cx('item-unstyled')}>
              <a href="facebook.com">
                <FaFacebookF />
              </a>
            </li>
            <li className={cx('item-unstyled')}>
              <a href="https://www.instagram.com/">
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className={cx('team-icon')}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </div>
      </div>
    </Col>
  );
};
