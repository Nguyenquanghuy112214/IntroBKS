import React, { useState } from 'react';

// Reacbootstap
import { Container, Row, Col } from 'react-bootstrap';
// Import library
import YouTube from 'react-youtube';
// Import motion
import { motion, AnimatePresence } from 'framer-motion';

// Img
import img1 from '~/assets/img/home/about-sec-img.jpg';
import img2 from '~/assets/img/home/video-poster.jpg';
import img3 from '~/assets/img/home/youtube-icon.png';

// Css module
import classNames from 'classnames/bind';
import styles from './_AboutSection.module.scss';
const cx = classNames.bind(styles);

function AboutSection() {
  const [activeVideo, setActiveVideo] = useState(false);
  const opts = {
    playerVars: {
      autoplay: true,
    },
  };
  const handleVideo = () => {
    setActiveVideo(!activeVideo);
  };
  return (
    <Container>
      <Row>
        <Col lg={5} md={5}>
          <div className={cx('about-left-icon')}>
            <figure className={cx('position-relative')}>
              <img src={img1} alt="" />
            </figure>
          </div>
        </Col>
        <Col lg={7} md={7}>
          <div className={cx('about-right-con')}>
            <h5>About us</h5>
            <h2>We are The Best Finance Agency in the Area</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit cillum nulla pae nostrud exercitation alias consequatur aut
              perferendis doloribus asperi aut rerum necessitatibus saeo eveniet.
            </p>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihio quo minus maxime placeat facere.</p>
          </div>
        </Col>
      </Row>
      <div className={cx('about-video', 'position-relative')}>
        <AnimatePresence>
          {!activeVideo && (
            <motion.div
              initial={{ opacity: 1, x: 0, visibility: 'visible' }}
              animate={{ opacity: !activeVideo ? 1 : 0, x: activeVideo ? 120 : 0, visibility: !activeVideo ? 'visible' : 'hidden' }}
              onClick={handleVideo}
              className={cx('videoCoverImage')}
            >
              <div className={cx('wrapper-img')}>
                <img src={img2} alt="" />
              </div>
              <div className={cx('video-wrap')}>
                <img src={img3} alt="" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ y:-50,opacity: 0, visibility: 'hidden' }}
              animate={{ opacity: activeVideo ? 1 : 0, y: activeVideo ? 0 : -50, visibility: activeVideo ? 'visible' : 'hidden' }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className={cx('video')}
            >
              <YouTube className={cx('iframe')} opts={opts} videoId="S4kHc8ibC1g" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
}

export default AboutSection;
