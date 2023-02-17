import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import AboutSection from '~/libraries/components/aboutsection/AboutSection';
import ServicesSection from '~/libraries/components/servicessection/ServicesSection';
import BusinessSection from '~/libraries/components/businesssection/BusinessSection';
import StaticText from '~/libraries/components/statictext/StaticText';
import CaseSection from '~/libraries/components/casesection/CaseSection';
import TestimonialSsection from '~/libraries/components/testimonialssection/TestimonialSsection';
import BlogSection from '~/libraries/components/blogsection/BlogSection';

// Css module
import classNames from 'classnames/bind';
import styles from './_HomePage.module.scss';
const cx = classNames.bind(styles);

export default function HomePage() {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="700" className={cx('padding-top')}>
        <AboutSection />
      </div>
      <div className={cx('padding-top', 'padding-bottom', 'sevices')}>
        <ServicesSection />
      </div>
      <div className={cx('padding-top', 'padding-bottom', 'business-sec')}>
        <BusinessSection />
      </div>
      <Container>
        <StaticText />
      </Container>
      <div className={cx('padding-top', 'padding-bottom')}>
        <CaseSection />
      </div>
      <div className={cx('padding-top', 'padding-bottom', 'sevices')}>
        <TestimonialSsection />
      </div>
      <div className={cx('padding-top', 'padding-bottom')}>
        <BlogSection />
      </div>
    </>
  );
}
