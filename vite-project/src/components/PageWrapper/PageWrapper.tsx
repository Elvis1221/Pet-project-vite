import React, { FC } from 'react';

import PageContainer from '../PageContainer/PageContainer';
import NavMenu from '../NavMenu/NavMenu';

import css from './PageWrapper.module.css';

interface IChildren {
  children: JSX.Element | JSX.Element[];
  pageTitle:string
}

const PageWrapper: FC<IChildren> = ({ children, pageTitle }) => {
  return (
    <PageContainer>
      <div className={css.Container}>
        <NavMenu />
        <h1 className={css.PageTitle}>{pageTitle}</h1>
        <div className={css.ContentWrapper}>{children}</div>
      </div>
    </PageContainer>
  );
};

export default PageWrapper;
