import React from 'react';
// React-bootstrap
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../button/Button';
// Img
import anh1 from '~/assets/img/home/blog-img.jpg';
import anh2 from '~/assets/img/home/blog-icon1.png';
// Css module
import classNames from 'classnames/bind';
import styles from './_BlogSection.module.scss';
const cx = classNames.bind(styles);

function BlogSection() {
  return (
    <div className={cx('blog-section')}>
      <Container>
        <div className={cx('blog-headings','text-center')}>
          <h5>Our News</h5>
          <h2>Latest Blog Pots</h2>
        </div>
        <Row>
          <Col lg={4} md={4}>
            <div className={cx('blog-item')}>
              <figure>
                <img src={anh1} alt="" />
              </figure>
              <div className={cx('blog-content')}>
                <div className={cx('blog-text')}>
                  <span className={cx('d-inline-block','span')}>Business</span>
                </div>
                <h4>
                  Why Tech Should Behave
                  <br />
                  More Finance.
                </h4>
                <p>
                  Modi tempora incidunt ut labore aur
                  <br />
                  dolore magnam aliquam..
                </p>
                <div className={cx('author-details')}>
                  <div className={cx('author')}>
                    <figure className={cx('float-left')}>
                      <img src={anh2} alt="" />
                    </figure>
                    <span className={cx('d-inline-block')}>David William</span>
                  </div>
                  <small className={cx('float-right')}>jan 1, 2022</small>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className={cx('blog-item')}>
              <figure>
                <img src={anh1} alt="" />
              </figure>
              <div className={cx('blog-content')}>
                <div className={cx('blog-text')}>
                  <span className={cx('d-inline-block','span')}>Business</span>
                </div>
                <h4>
                  Why Tech Should Behave
                  <br />
                  More Finance.
                </h4>
                <p>
                  Modi tempora incidunt ut labore aur
                  <br />
                  dolore magnam aliquam..
                </p>
                <div className={cx('author-details')}>
                  <div className={cx('author')}>
                    <figure className={cx('float-left')}>
                      <img src={anh2} alt="" />
                    </figure>
                    <span className={cx('d-inline-block')}>David William</span>
                  </div>
                  <small className={cx('float-right')}>jan 1, 2022</small>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className={cx('blog-item')}>
              <figure>
                <img src={anh1} alt="" />
              </figure>
              <div className={cx('blog-content')}>
                <div className={cx('blog-text')}>
                  <span className={cx('d-inline-block','span')}>Business</span>
                </div>
                <h4>
                  Why Tech Should Behave
                  <br />
                  More Finance.
                </h4>
                <p>
                  Modi tempora incidunt ut labore aur
                  <br />
                  dolore magnam aliquam..
                </p>
                <div className={cx('author-details')}>
                  <div className={cx('author')}>
                    <figure className={cx('float-left')}>
                      <img src={anh2} alt="" />
                    </figure>
                    <span className={cx('d-inline-block')}>David William</span>
                  </div>
                  <small className={cx('float-right')}>jan 1, 2022</small>
                </div>
              </div>
            </div>
          </Col>
          <div className={cx('text-center mt-5')}>
            <Button title="View All Blogs"/>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default BlogSection;
