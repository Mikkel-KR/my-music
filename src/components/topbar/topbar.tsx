import classNames from 'classnames';
import styles from './topbar.module.scss';
import TopbarLink from './topbarLink';

const TopBar = () => {
  return (
    <nav className={classNames(styles.topbar)}>
      <TopbarLink linkTitle="Home" to="/" />
      <TopbarLink linkTitle="Top 100" to="/top" />
    </nav>
  );
};

export default TopBar;
