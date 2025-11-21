import { classNames } from 'shared/lib/classNames';
import styles from './Navbar.module.scss';
import { Button, Modal, useModal } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
   className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
   const { t } = useTranslation();
   const { isOpen: isAuthModal, open: openAuthModal, close: closeAuthModal } = useModal();

   return (
      <div className={classNames(styles.Navbar, {}, [className])}>
         <div className="ml-auto">
            <Button variant="clearInverted" onClick={openAuthModal}>
               {t('Войти')}
            </Button>
         </div>
         <Modal isOpen={isAuthModal} onClose={closeAuthModal}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facilis aut similique?
         </Modal>
      </div>
   );
};

export default Navbar;
