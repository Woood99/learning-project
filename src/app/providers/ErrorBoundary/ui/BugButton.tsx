import { Button } from 'shared/ui';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const BugButton = () => {
   const [error, setError] = useState(false);
   const { t } = useTranslation();

   const onThrow = () => setError(true);

   useEffect(() => {
      if (error) {
         throw new Error();
      }
   }, [error]);

   return (
      <Button variant="outline" onClick={onThrow}>
         {t('Вызвать ошибку')}
      </Button>
   );
};

export default BugButton;
