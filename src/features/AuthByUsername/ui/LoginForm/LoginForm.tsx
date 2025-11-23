import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';

interface LoginFormProps {
   className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
   const { t } = useTranslation();

   return (
      <div className={classNames('flex flex-col', {}, [className])}>
         <Input placeholder={t('Введите username')} autoFocus />
         <Input placeholder={t('Введите пароль')} />
         <Button variant="outline" className="mt-4">
            {t('Войти')}
         </Button>
      </div>
   );
};

export default LoginForm;
