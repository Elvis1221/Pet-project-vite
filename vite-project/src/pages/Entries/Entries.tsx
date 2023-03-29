import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { PAGE_TITLES } from '../../constants';

const Entries: React.FC = () => {
  return (
    <PageWrapper pageTitle={PAGE_TITLES.ENTRIES}>
      <div>
        <h1>Welcome to my {PAGE_TITLES.ENTRIES} Page!</h1>
      </div>
    </PageWrapper>
  );
};

export default Entries;
