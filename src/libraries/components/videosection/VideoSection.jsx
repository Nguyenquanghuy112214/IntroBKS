import React from 'react';
// Import library
import YouTube from 'react-youtube';
// Reacbootstap
import { Container, Row, Col } from 'react-bootstrap';

// Css module
import classNames from 'classnames/bind';
import styles from './_VideoSection.module.scss';
const cx = classNames.bind(styles);

function ServicesSection() {
  const opts = {
    playerVars: {
      autoplay: true,
    },
  };
  return (
    <Container className={cx('ctn-services')}>
      <YouTube className={cx('iframe')} opts={opts} videoId="S4kHc8ibC1g" />
    </Container>
  );
}

export default ServicesSection;
