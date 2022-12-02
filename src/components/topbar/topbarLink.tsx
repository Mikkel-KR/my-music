import classNames from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './topbarLink.module.scss';

type TopbarLinkProps = {
  linkTitle: string;
} & NavLinkProps;

const TopbarLink = ({ linkTitle, ...navLinkProps }: TopbarLinkProps) => {
  return (
    <NavLink
      {...navLinkProps}
      className={({ isActive }) =>
        classNames(styles.navLink, isActive && styles.active)
      }
    >
      {linkTitle}
    </NavLink>
  );
};

export default TopbarLink;
