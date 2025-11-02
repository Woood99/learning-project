import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

interface LangSwitcherProps {
   className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
   const { t, i18n } = useTranslation();

   const toggle = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
   };

   return (
      <Button variant="clear" onClick={toggle} className={classNames('', {}, [className])}>
         {t('Язык')}
      </Button>
   );
};

export default LangSwitcher;
