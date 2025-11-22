import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounter';
import { useTranslation } from 'react-i18next';

const Counter = () => {
   const dispatch = useDispatch();
   const counterValue = useSelector(getCounterValue);
   const { t } = useTranslation();

   const increment = () => {
      dispatch(counterActions.increment());
   };
   const decrement = () => {
      dispatch(counterActions.decrement());
   };

   return (
      <div>
         <h1 data-testid="counter-value-title">{counterValue}</h1>
         <Button data-testid="counter-increment-btn" onClick={increment}>
            {t('increment')}
         </Button>
         <Button data-testid="counter-decrement-btn" onClick={decrement}>
            {t('decrement')}
         </Button>
      </div>
   );
};

export default Counter;
