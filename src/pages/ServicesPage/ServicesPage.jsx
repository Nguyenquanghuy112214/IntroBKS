import React from 'react';

// React-bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Img
import anh1 from '~/assets/img/services/service-detail-design-img.jpg';
import anh2 from '~/assets/img/services/business-growth.jpg';

// Controllers
import FormSection from '~/libraries/components/formsection/FormSection';

// React-icon
import { BsCheck } from 'react-icons/bs';

// Css module
import classNames from 'classnames/bind';
import styles from './_ServicesPage.module.scss';
const cx = classNames.bind(styles);
function ServicesPage() {
  return (
    <>
      <div className={cx('service-detail')}>
        <Container>
          <div className={cx('service-detail-sec')}>
            <div>
              <h2>Marketing Advices</h2>
            </div>
            <div className={cx('service-img')}>
              <figure>
                <img src={anh1} alt="" />
              </figure>
            </div>
            <div className={cx('service-detail-text')}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari atur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia des erunt mollit anim id est laborum.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </Container>
        <div className={cx('overview-sec')}>
          <Container>
            <Row>
              <Col lg={6} md={6} className="p-4">
                <div className={cx('overview-left-sec')}>
                  <h3 className={cx('mb-2')}>Services we Provide</h3>
                  <h4>We are The Best Finance Agency in the Area</h4>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui
                    ratione voluptatem sequi nesciuntneque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                  </p>
                  <div className={cx('benefits-sec')}>
                    <ul>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} className="p-4">
                <div className={cx('service-sec-image')}>
                  <figure>
                    <img src={anh2} alt="" />
                  </figure>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={cx('overview-sec')}>
          <Container>
            <Row className={cx('flex-row-reverse')}>
              <Col lg={6} md={6} className="p-4">
                <div className={cx('overview-left-sec')}>
                  <h3>Services we Provide</h3>
                  <h4>We are The Best Finance Agency in the Area</h4>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui
                    ratione voluptatem sequi nesciuntneque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                  </p>
                  <div className={cx('benefits-sec')}>
                    <ul>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                      <li className={cx('d-inline-block')}>
                        <BsCheck />
                        <span>Lorem ipsum dolor sit amet</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} className="p-4">
                <div className={cx('service-sec-image')}>
                  <figure>
                    <img src={anh2} alt="" />
                  </figure>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FormSection />
      </div>
    </>
  );
}

export default ServicesPage;
