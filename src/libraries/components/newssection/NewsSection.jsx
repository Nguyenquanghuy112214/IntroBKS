import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import img1 from '~/assets/img/news/standard_post_img01.jpg';
import { FaCalendarAlt } from 'react-icons/fa';
// Css module
import classNames from 'classnames/bind';
import styles from './_NewsSection.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const NewsSection = () => {
  const data = [
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'img',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
    {
      id: 1,
      img: img1,
      day: 'Jan 21, 2022',
      numberComment: 33,
      type: 'video',
      comments: 33,
      label: 'Technology',
      title: 'Standrad post with a single image',
      content: 'Curabitur pulvinar euismod anteac sagitisante posuere sdfsac.',
    },
  ];
  return (
    <Container fluid>
      <Row className={cx('row')}>
        {data !== undefined &&
          data.map((item, index) => {
            return <NewItem key={index} data={item} />;
          })}
      </Row>
    </Container>
  );
};

export default NewsSection;
export const NewItem = ({ data }) => {
  return (
    <Col xxl={2} xl={2} lg={6} md={12} className={cx('new-padding')}>
      <div className={cx('new-item')}>
        <div className={cx('new-label')}>
          <Link to="/">{data.label}</Link>
        </div>
        <div className={cx('new-img')}>
          <img src={data.img} alt="" />
        </div>
        <div className={cx('new-text')}>
          <div className={cx('new-day-comment')}>
            <div className={cx('new-comment')}>
              <FaCalendarAlt />
              <span style={{ marginLeft: 4 }}>Jan 21, 2022</span>
            </div>
            <div className={cx('new-day')}>33 Comments</div>
          </div>
          <h5 className={cx('new-title')}>
            <Link to="/">{data.title}</Link>
          </h5>
          <p>{data.content}</p>
          <h5 className={cx('new-more')}>
            <Link to="/">Read More</Link>
          </h5>
        </div>
      </div>
    </Col>
  );
};
