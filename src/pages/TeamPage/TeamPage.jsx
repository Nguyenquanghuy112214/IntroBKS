
import React from 'react';

// Components
import StaffSection from '~/libraries/components/staffsection/StaffSection';
import ClientSection from '~/libraries/components/clientsection/ClientSection';
import BlogSection from '~/libraries/components/blogsection/BlogSection';


import classNames from 'classnames/bind';
import styles from './_TeamPage.module.scss';
const cx = classNames.bind(styles);
const TeamPage = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="700" className={cx('padding-top', 'padding-bottom')}>
        <StaffSection />
      </div>
      <div className={cx('padding-top', 'client')}>
        <ClientSection />
      </div>
      <div className={cx('padding-top', 'padding-bottom')}>
        <BlogSection />
      </div>
    </>
  );
};

export default TeamPage;

