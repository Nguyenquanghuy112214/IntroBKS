import React from 'react';

import NewsSection from '~/libraries/components/newssection/NewsSection';

import classNames from 'classnames/bind';
import styles from './_NewsPage.module.scss';
const cx = classNames.bind(styles);
const NewsPage = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="700" className={cx('padding-top', 'padding-bottom')}>
        <NewsSection />
      </div>
    </>
  );
};

export default NewsPage;

