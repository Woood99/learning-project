import { classNames } from 'shared/lib/classNames';
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink, Button } from 'shared/ui';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';

interface SidebarProps {
   className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
   const [collapsed, setCollapsed] = useState(false);

   const onToggle = () => {
      setCollapsed(prev => !prev);
   };

   return (
      <div data-testid="sidebar" className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
         <Button data-testid="sidebar-toggle" square size="l" variant="backgroundInverted" className={styles.collapseBtn} onClick={onToggle}>
            {collapsed ? '>' : '<'}
         </Button>
         <div className={styles.links}>
            <AppLink variant="secondary" className={styles.link} to={RoutePath.main}>
               <MainIcon />
               <span>Главная</span>
            </AppLink>
            <AppLink variant="secondary" className={styles.link} to={RoutePath.about}>
               <AboutIcon />
               <span>О сайте</span>
            </AppLink>
         </div>
         <div className={styles.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} />
         </div>
      </div>
   );
};

export default Sidebar;
