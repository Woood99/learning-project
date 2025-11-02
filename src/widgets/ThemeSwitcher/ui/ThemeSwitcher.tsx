import { classNames } from 'shared/lib/classNames';
import styles from './ThemeSwitcher.module.scss';
import { Themes, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui';

interface ThemeSwitcherProps {
   className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
   const { theme, toggleTheme } = useTheme();

   return (
      <Button variant="clear" className={classNames(styles.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
         {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
      </Button>
   );
};

export default ThemeSwitcher;
