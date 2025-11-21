import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './ThemeContext';

interface useThemeResult {
   toggleTheme: () => void;
   theme: Themes;
}

export const useTheme = (): useThemeResult => {
   const { theme, setTheme } = useContext(ThemeContext);

   const toggleTheme = () => {
      const newValue: Themes = theme === 'dark' ? 'light' : 'dark';

      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newValue);

      document.body.classList.remove('light', 'dark');
      document.body.classList.add(newValue);
      setTheme(newValue);
   };

   useEffect(() => {
      document.body.classList.add(theme);
   }, []);

   return {
      theme,
      toggleTheme,
   };
};
