import React, { FC } from 'react';

import css from './PageContainer.module.css';

interface IChildren {
  children: JSX.Element | JSX.Element[];
}

const PageContainer: FC<IChildren> = ({ children }) => {
  return <div className={css.Container}>{children}</div>;
};

export default PageContainer;
