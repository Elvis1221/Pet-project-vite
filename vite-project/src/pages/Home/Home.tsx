import React, { FC } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { PAGE_TITLES } from '../../constants';

const Home: FC = () => {
  return (
    <PageWrapper pageTitle={PAGE_TITLES.HOME}>
      <h1>Welcome to my Home Page!</h1>
    </PageWrapper>
  );
};

export default Home;
