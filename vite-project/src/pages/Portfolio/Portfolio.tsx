import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { PAGE_TITLES } from '../../constants';

const Portfolio: React.FC = () => {
  return (
    <PageWrapper pageTitle={PAGE_TITLES.PORTFOLIO}>
      <div>
        <h1>Welcome to my Portfolio Page!</h1>
      </div>
    </PageWrapper>
  );
};

export default Portfolio;
