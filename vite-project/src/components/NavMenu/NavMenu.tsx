import React from 'react';
import { Link } from 'react-router-dom';

import css from './NavMenu.module.css';

interface HeaderProps {
  title: string;
  link: string;
}

export const NavMenu: React.FC = () => {
  const menuItems: HeaderProps[] = [
    { link: '/entry-form', title: 'Entry Form' },
    { link: '/entries', title: 'Entries' },
    { link: '/posts', title: 'Posts' },
    { link: '/registration-form', title: 'Reg Form' },
    { link: '/', title: 'Home' },
    { link: '/about-me', title: 'About me' },
  ];

  return (
    <div className={css.NavMenuWrapper}>
      <ul className={css.NavMenuContent}>
        {menuItems.map((item, index) => (
          <Link className={css.Link} to={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
