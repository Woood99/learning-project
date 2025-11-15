import { classNames } from 'shared/lib/classNames';
import styles from './Loader.module.scss';
import { FC } from 'react';

interface LoaderProps {
   className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
   return (
      <div className={classNames(styles.Loader, {}, [className])}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
   );
};

export default Loader;
