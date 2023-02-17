import React from 'react';
// React-bootstrap
import { Container } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
// Img
import anh1 from '~/assets/img/home/slider-left2-img.png';
import anh2 from '~/assets/img/home/slider-left1-img.png';
import anh3 from '~/assets/img/home/slider-active-img.png';
import anh4 from '~/assets/img/home/slider-right1-img.png';
import anh5 from '~/assets/img/home/slider-right2-img.png';
import anh6 from '~/assets/img/home/quote-icon.png';
import anh7 from '~/assets/img/home/stars-icon.png';
// Css module
import classNames from 'classnames/bind';
import styles from './_TestimonialSsection.module.scss';
const cx = classNames.bind(styles);

function TestimonialSsection() {
  return (
    <div className={cx('testimonials-sec')}>
      <Container>
        <div className={cx('testimonials-inner-sec')}>
          <div data-aos-duration="700" data-aos="fade-down" className={cx('testimonials-heading', 'text-center')}>
            <h5>Testimonials</h5>
            <h2>What Our Client are Saying</h2>
          </div>
          <div className={cx('custom')}></div>
          <div className={cx('half-circle')}>
            <div className={cx('clients', 'position-relative')}>
              <figure className={cx('slider-left2', 'z')}>
                <img src={anh1} alt="" />
              </figure>
              <figure className={cx('slider-left1', 'z')}>
                <img src={anh2} alt="" />
              </figure>
              <figure className={cx('slider-active-img', 'z')}>
                <img src={anh3} alt="" />
              </figure>
              <figure className={cx('slider-right1', 'z')}>
                <img src={anh4} alt="" />
              </figure>
              <figure className={cx('slider-right2', 'z')}>
                <img src={anh5} alt="" />
              </figure>
            </div>
          </div>
          <Swiper 
          data-aos-duration="700" data-aos="fade-up"
            // autoplay={{ delay: 5000 }}
            navigation={true}
            pagination={true}
            loop={true}
            grabCursor={true}
            speed={900}
            modules={[ Navigation, Autoplay]}
            className={cx('mySwiper','swiper-tes')}
          >
            <SwiperSlide>
              <div className={cx('carousel-items')}>
                <figure>
                  <img src={anh6} alt="" />
                </figure>
                <p>
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua rue znim
                  <br />
                  aeu minim veniam, quis nostrud exercitation ullamco laboris nisi ut alirui
                  <br />
                  commodo conseruat aute irure dolor reprehenderit.
                </p>
                <div className={cx('starts-img')}>
                  <figure>
                    <img src={anh7} alt="" />
                  </figure>
                  <h4>Kevin Andrew</h4>
                  <span>Co-Founder</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx('carousel-items')}>
              <figure>
                  <img src={anh6} alt="" />
                </figure>
                <p>
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua rue znim
                  <br />
                  aeu minim veniam, quis nostrud exercitation ullamco laboris nisi ut alirui
                  <br />
                  commodo conseruat aute irure dolor reprehenderit.
                </p>
                <div className={cx('starts-img')}>
                  <figure>
                    <img src={anh7} alt="" />
                  </figure>
                  <h4>Kevin Andrew</h4>
                  <span>Co-Founder</span>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className={cx('carousel-item')}>
                <figure>
                  <img src={anh6} alt="" />
                  <p>
                    Eiusmod tempor incididunt ut labore et dolore magna aliqua rue znim
                    <br />
                    aeu minim veniam, quis nostrud exercitation ullamco laboris nisi ut alirui
                    <br />
                    commodo conseruat aute irure dolor reprehenderit.
                  </p>
                  <div className={cx('starts-img')}>
                    <figure>
                      <img src={anh7} alt="" />
                    </figure>
                    <h4>Kevin Andrew</h4>
                    <span>Co-Founder</span>
                  </div>
                </figure>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default TestimonialSsection;
