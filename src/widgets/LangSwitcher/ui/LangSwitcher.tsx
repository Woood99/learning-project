import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

interface LangSwitcherProps {
   className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
   const { t, i18n } = useTranslation();

   const toggle = () => {
      const currentLanguage = i18n.language;
      i18n.changeLanguage(currentLanguage === 'ru' || currentLanguage === 'ru-RU' ? 'en' : 'ru');
   };

   return (
      <Button variant="clear" onClick={toggle} className={classNames('', {}, [className])}>
         {t('Язык')}
      </Button>
   );
};

export default LangSwitcher;
