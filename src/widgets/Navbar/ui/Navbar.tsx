import { classNames } from 'shared/lib/classNames';
import styles from './Navbar.module.scss';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useBoolean } from 'shared/lib/hooks/useBoolean';

interface NavbarProps {
   className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
   const { t } = useTranslation();
   const { isOpen: isAuthModal, open: openAuthModal, close: closeAuthModal } = useBoolean();

   return (
      <div className={classNames(styles.Navbar, {}, [className])}>
         <div className="ml-auto">
            <Button variant="clearInverted" onClick={openAuthModal}>
               {t('Войти')}
            </Button>
         </div>
         <LoginModal isOpen={isAuthModal} onClose={closeAuthModal} />
      </div>
   );
};

export default Navbar;
