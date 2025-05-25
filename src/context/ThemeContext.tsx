import { createContext, useContext, useState, type ReactNode } from 'react';

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}
const ThemeContext = createContext<IThemeContext | undefined>(undefined);
export default ThemeContext;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('context error');
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const toggleTheme = (): void => {
    setIsDark(prev => !prev);
  };
  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
