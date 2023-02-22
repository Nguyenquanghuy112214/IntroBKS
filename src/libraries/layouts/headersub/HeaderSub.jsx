import { useState } from 'react';
// Layout
import { Container, Row, Col } from 'react-bootstrap';
// Router
import { Link } from 'react-router-dom';

// Components
import MenuMb from '~/libraries/components/meunuMb/MenuMb';
import Button from '~/libraries/components/button/Button';
import IconClose from '~/libraries/components/Iconclose/IconClose';
import { listMenu } from '~/constants/menu';

// Img
import logo from '~/assets/img/logo.png';
import phone from '~/assets/img/contact-icon.png';

// Css module
import classNames from 'classnames/bind';
import styles from './_headersub.module.scss';
const cx = classNames.bind(styles);

export default function HeaderSub(props) {
  const [active, setActive] = useState(false);
  const handMenuMb = () => {
    setActive(!active);
  };
  const { title, btn } = props;
  return (
    <Container className={cx('ctn-fluid')} fluid style={{ padding: 0 }}>
      <header>
        <div className={cx('wrapper-header')}>
          <Row className={cx('navbar-pc')}>
            <Col xxl={3} xl={2} lg={3} md={3} className={cx('col-header__left')}>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </Col>
            <Col xxl={9} xl={10} lg={9} md={9} className={cx('col-header__right')}>
              <ul className={cx('wrapper-menu')}>
                {listMenu !== undefined &&
                  listMenu.map((menu, index) => {
                    return (
                      <li className={cx('item', `${menu.chidrent ? 'after' : ''}`)} key={index}>
                        <Link to={menu.link}>{menu.name}</Link>
                        {menu.chidrent && (
                          <ul className={cx('wrapper-menu__children')}>
                            {menu.chidrent !== undefined &&
                              menu.chidrent.map((item, i) => {
                                return (
                                  <li key={i} className={cx('item-children')}>
                                    {item.name}
                                  </li>
                                );
                              })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
              </ul>
              <Button title="Contact us" link="/" />

              <div className={cx('callus')}>
                <div className={cx('img-call')}>
                  <img src={phone} alt="" />
                </div>
                <div className={cx('contact-box')}>
                  <span className={cx('contact-text')}>Call us at:</span>
                  <span className={cx('contact-number')}>+123 1232 123</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div onClick={handMenuMb} className={cx('wrapper-iconclose')}>
          <IconClose />
        </div>
        <Container fluid className={cx('wrapper-menumb', `${active ? 'active' : ''}`)}>
          <MenuMb />
        </Container>
      </header>
      <div className={cx('wrapper')}>
        <Container className={cx('container-content')}>
          <Row className={cx('justify-content-center')}>
            <Col xxl={10} xl={10} lg={10} md={9} xs={12}>
              <div className={cx('wrapper-content')}>
                <h1 data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="700" className={cx('main-content')}>
                  {title}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="700"
                  className={cx('sub-content', 'white')}
                >
                  Ruis aute irure dolor in reprehenderit in voluptate velit cillum
                  <br />
                  nulla pariatur nostrud exercitation.
                </p>
                <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700" className={cx('wrapper-button')}>
                  <Button title={`Home - ${btn}`} link="/" transparent hoverNone />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}
