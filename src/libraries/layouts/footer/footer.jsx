import { useEffect, useState } from 'react';
// Css module
import classNames from 'classnames/bind';
import { routePath } from '~/routing/pathRouting';
// Img
import anh1 from '~/assets/img/footer/footer-img.png';
// React-bootstrap
import { Col, Container, Row } from 'react-bootstrap';
import styles from './_footer.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
export default function MainFooter({nomargin}) {
 
  return (
    <div className={cx('footer-main-con', 'padding-bottom', `${nomargin ? 'no-margin' : ''}`)}>
      <Container>
        <Row>
          <Col lg={4} md={4}>
            <div data-aos="fade-down" data-aos-duration="800" className={cx('footer-detail')}>
              <figure>
                <img src={anh1} alt="" />
              </figure>
              <p>
                Duis aute irure dolor in reprehenderit
                <br />
                in voluptate velit esse cillum dolore
                <br />
                eu fugiat nulla pariatur.
              </p>
            </div>
          </Col>
          <Col data-aos="fade-up" data-aos-duration="800" lg={4} md={4} className={cx('ps-5', 'd-nones')}>
            {/*  */}
            <div className={cx('footer-links')}>
              <h4>Userful Links</h4>
              <ul className={cx('list-unstyled')}>
                <li className={cx('position-relative')}>
                  <Link className="d-inline-block" to="/">
                    Abouts us
                  </Link>
                </li>
                <li className={cx('position-relative')}>
                  <Link className="d-inline-block" to="/">
                    Services
                  </Link>
                </li>
                <li className={cx('position-relative')}>
                  <Link className="d-inline-block" to="/">
                    Team
                  </Link>
                </li>
                <li className={cx('position-relative')}>
                  <Link className="d-inline-block" to="/">
                    News
                  </Link>
                </li>
                <li className={cx('position-relative')}>
                  <Link className="d-inline-block" to="/">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div data-aos="fade-down" data-aos-duration="800" className={cx('footer-links')}>
              <h4>Contact Info</h4>
              <ul className={cx('list-unstyled')}>
                <li className={cx('position-relative')}>
                  <Link className="d-inline-block" to="/">
                    +123412
                  </Link>
                </li>
                <li className={cx('position-relative')}>
                  <Link className="d-inline-block" to="/">
                    bkt@gmail.com
                  </Link>
                </li>
                <li className={cx('position-relative')}>
                  <Link className="d-inline-block" to="/">
                    LK39 Xuân Tảo Hà Nội
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
