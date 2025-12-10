import { classNames } from 'shared/lib/classNames';
import styles from './Navbar.module.scss';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useBoolean } from 'shared/lib/hooks/useBoolean';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useCallback } from 'react';

interface NavbarProps {
   className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
   const { t } = useTranslation();
   const { isOpen: isAuthModal, open: openAuthModal, close: closeAuthModal } = useBoolean();
   const authData = useSelector(getUserAuthData);
   const dispatch = useDispatch();

   const onLogout = useCallback(() => {
      dispatch(userActions.logout());
   }, []);

   if (authData) {
      return (
         <div className={classNames(styles.Navbar, {}, [className])}>
            <div className="ml-auto">
               <Button variant="clearInverted" onClick={onLogout}>
                  {t('Выйти')}
               </Button>
            </div>
         </div>
      );
   }

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
