import { classNames } from 'shared/lib/classNames';
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

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
         <button data-testid="sidebar-toggle" onClick={onToggle}>toggle</button>
         <div className="w-full absolute bottom-5 flex justify-center items-center gap-4">
            <ThemeSwitcher />
            <LangSwitcher />
         </div>
      </div>
   );
};

export default Sidebar;
