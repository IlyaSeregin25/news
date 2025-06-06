import Header from '@/widgets/header/ui/Header/Header';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Outlet } from 'react-router-dom';

const BaseLyaout = () => {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLyaout;
