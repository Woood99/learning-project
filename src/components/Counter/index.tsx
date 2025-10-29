import { useState } from 'react';
import styles from './Counter.module.scss';

interface Props {
   startNumber?: number;
   minNumber?: number;
   maxNumber?: number;
}

const Counter = ({ startNumber = 0, minNumber = 0, maxNumber = 5 }: Props) => {
   const [count, setCount] = useState(startNumber);

   return (
      <div>
         <button className={styles.btn} disabled={count <= minNumber} onClick={() => setCount(prev => prev - 1)}>
            Уменьшить
         </button>
         <p>{count}</p>
         <button disabled={count >= maxNumber} onClick={() => setCount(prev => prev + 1)}>
            Увеличить
         </button>
      </div>
   );
};

export default Counter;
