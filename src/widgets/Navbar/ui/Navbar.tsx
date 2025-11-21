import { classNames } from 'shared/lib/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
   return (
      <div className={classNames(styles.Navbar, {}, [className])}>
         <div className="ml-auto"></div>
      </div>
   );
};

export default Navbar;
