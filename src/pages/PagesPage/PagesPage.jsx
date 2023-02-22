import React from 'react';
// Components
import CaseSection from '~/libraries/components/casesection/CaseSection';
import TestimonialSsection from '~/libraries/components/testimonialssection/TestimonialSsection';
import BlogSection from '~/libraries/components/blogsection/BlogSection';
import FormSection from '~/libraries/components/formsection/FormSection';

// Css module
import classNames from 'classnames/bind';
import styles from './_PagesPage.module.scss';
const cx = classNames.bind(styles);
function PagesPage() {
  return (
    <>
      <div className={cx('padding-top', 'padding-bottom')}>
        <CaseSection />
      </div>
      <div className={cx('padding-top', 'padding-bottom', 'sevices')}>
        <TestimonialSsection />
      </div>
      <div className={cx('padding-top')}>
        <BlogSection />
      </div>
      <div className={cx('padding-bottom')}>
        <FormSection />
      </div>
    </>
  );
}

export default PagesPage;
