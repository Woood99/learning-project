import { useContext } from 'react';
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
      setTheme(newValue);
   };

   return {
      theme,
      toggleTheme,
   };
};
