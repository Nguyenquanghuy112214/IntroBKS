
import React from 'react';

// Components
import AboutUsSection from '~/libraries/components/aboutussection/AboutUsSection';
import ClientSection from '~/libraries/components/clientsection/ClientSection';
import VideoSection from '~/libraries/components/videosection/VideoSection';
import TestimonialSsection from '~/libraries/components/testimonialssection/TestimonialSsection';
import BlogSection from '~/libraries/components/blogsection/BlogSection';
import FormSection from '~/libraries/components/formsection/FormSection';

// Css module
import classNames from 'classnames/bind';
import styles from './_AboutPage.module.scss';
const cx = classNames.bind(styles);

const AboutPage = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="700" className={cx('padding-top', 'padding-bottom')}>
        <AboutUsSection />
      </div>
      <div className={cx('padding-top', 'client')}>
        <ClientSection />
      </div>
      <div className={cx('padding-top', 'padding-bottom')}>
        <VideoSection />
      </div>
      <div className={cx('padding-top', 'padding-bottom', 'sevices')}>
        <TestimonialSsection />
      </div>
      <div className={cx('padding-top')}>
        <BlogSection />
      </div>
      <div className={cx( 'padding-bottom')}>
        <FormSection />
      </div>
    </>
  );
};

export default AboutPage;
