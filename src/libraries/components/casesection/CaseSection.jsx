import React from 'react';

// React bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// Router
import { Link } from 'react-router-dom';
// React-icon
import { BsArrowRightShort } from 'react-icons/bs';
// Img
import anh1 from '~/assets/img/home/case-report1-img.jpg';
import anh2 from '~/assets/img/home/case-report2-img.jpg';
import anh3 from '~/assets/img/home/case-report3-img.jpg';
import anh4 from '~/assets/img/home/case-report4-img.jpg';
import anh5 from '~/assets/img/home/case-report5-img.jpg';
import anh6 from '~/assets/img/home/case-report6-img.jpg';
// Css module
import classNames from 'classnames/bind';
import styles from './_CaseSection.module.scss';
import Button from '../button/Button';
const cx = classNames.bind(styles);
function CaseSection() {
  const data = [
    {
      id: 1,
      title: 'Business, Finance',
      subtitle: 'Financial Report 2019',
      img: anh1,
    },
    {
      id: 2,
      title: 'Business, Finance',
      subtitle: 'Financial Report 2019',
      img: anh2,
    },
    {
      id: 3,
      title: 'Business, Finance',
      subtitle: 'Financial Report 2019',
      img: anh3,
    },
    {
      id: 4,
      title: 'Business, Finance',
      subtitle: 'Financial Report 2019',
      img: anh4,
    },
    {
      id: 5,
      title: 'Business, Finance',
      subtitle: 'Financial Report 2019',
      img: anh5,
    },
    {
      id: 6,
      title: 'Business, Finance',
      subtitle: 'Financial Report 2019',
      img: anh6,
    },
  ];
  return (
    <div className={cx('case-sec')}>
      <Container>
        <div className={cx('case-inner-sec')}>
          <div className={cx('case-heading')}>
            <h5>Recently Completed</h5>
            <h2>Our Latest Case Studies</h2>
          </div>
          <div className={cx('case-sections')}>
            <Row>
              {data !== undefined &&
                data.map((item, index) => {
                  return <CaseItem key={index} data={item} />;
                })}
            </Row>
          </div>
          <div style = {{marginTop:'30px',textAlign:'center'}}>
          <Button title="View All Cases"/>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default CaseSection;

export const CaseItem = ({ data }) => {
  return (
    <Col xxl={4} xl={4} lg={4} md={4}>
      <div className={cx('case-report')}>
        <figure>
          <img src={data.img} alt="" />
        </figure>
        <div className={cx('case-text')}>
          <span>{data.title}</span>
          <h4>{data.subtitle}</h4>
        </div>
        <div className={cx('case-icon')}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </div>
      </div>
    </Col>
  );
};
