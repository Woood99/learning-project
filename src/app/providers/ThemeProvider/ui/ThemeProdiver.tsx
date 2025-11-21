import { FC, ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from '../lib/ThemeContext';

interface ThemeProviderProps {
   children: ReactNode;
   initialTheme?: Themes;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme = 'light' }) => {
   const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || initialTheme;
   const [theme, setTheme] = useState<Themes>(defaultTheme);

   const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

   return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
