import React from 'react';

import AddressSection from '~/libraries/components/addresssection/AddressSection';
import FormSection from '~/libraries/components/formsection/FormSection';

import classNames from 'classnames/bind';
import styles from './_ContactUsPage.module.scss';
const cx = classNames.bind(styles);
const ContactUsPage = () => {
  return (
    <>
      <div className={cx('padding-top', 'padding-bottom', 'sevices')}>
        <AddressSection />
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.83737213122!2d105.80993971483981!3d21.039192185992707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab13f1d315d5%3A0xb7451a053d79dc59!2zU-G7kSAzOSwgMTMwIMSQ4buRYyBOZ-G7rywgVsSpbmggUGjDumMsIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1627541287047!5m2!1sen!2s"
          className={cx('iframe')}
          loading="lazy"
          allowfullscreen
        ></iframe>
      </div>
      <div className={cx('', 'padding-bottom')}>
        <FormSection />
      </div>
    </>
  );
};

export default ContactUsPage;
