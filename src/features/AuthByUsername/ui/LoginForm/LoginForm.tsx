import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Input, Text } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState, ILoginSchema, loginActions, loginByUsername } from 'features/AuthByUsername';

interface LoginFormProps {
   className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
   const { t } = useTranslation();
   const dispatch = useDispatch();
   const { username, password, isLoading, error } = useSelector(getLoginState);

   const onChangeUsername = useCallback((value: ILoginSchema['username']) => {
      dispatch(loginActions.setUsername(value));
   }, []);

   const onChangePassword = useCallback((value: ILoginSchema['password']) => {
      dispatch(loginActions.setPassword(value));
   }, []);

   const onLoginClick = useCallback(() => {
      dispatch(loginByUsername({ username, password }));
   }, [username, password]);

   return (
      <div className={classNames('flex flex-col', {}, [className])}>
         <Text title={t('Форма авторизации')} />
         {error && <Text variant="error" text={error} />}
         <Input value={username} onChange={onChangeUsername} placeholder={t('Введите username')} autoFocus />
         <Input value={password} onChange={onChangePassword} placeholder={t('Введите пароль')} />
         <Button disabled={isLoading} onClick={onLoginClick} variant="outline" className="mt-4">
            {t('Войти')}
         </Button>
      </div>
   );
});

export default LoginForm;
