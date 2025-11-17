import { classNames } from 'shared/lib/classNames';
import styles from './Navbar.module.scss';
import { AppLink } from 'shared/ui';
import { BugButton } from 'app/providers/ErrorBoundary';

interface NavbarProps {
   className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
   return (
      <div className={classNames(styles.Navbar, {}, [className])}>
         <BugButton />
         <div className="ml-auto">
            <AppLink variant="secondary" to="/" className="mr-4">
               Главная
            </AppLink>
            <AppLink variant="secondary" to="/about">
               О сайте
            </AppLink>
         </div>
      </div>
   );
};

export default Navbar;
