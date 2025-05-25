import { themeIcons } from '../../assets';
import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>News REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <img
        onClick={toggleTheme}
        className={styles.theme}
        src={isDark ? themeIcons.light : themeIcons.dark}
        alt=""
        width={30}
      />
    </header>
  );
};

export default Header;
