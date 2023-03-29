import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { PAGE_TITLES } from '../../constants';

const AboutMe: React.FC = () => {
  return (
    <PageWrapper pageTitle={PAGE_TITLES.ABOUT_ME}>
      <div>
        <h1>Welcome to my About Me Page!</h1>
      </div>
    </PageWrapper>
  );
};

export default AboutMe;
