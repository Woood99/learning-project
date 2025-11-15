import { classNames } from 'shared/lib/classNames';
import styles from './PageLoader.module.scss';
import { Loader } from 'shared/ui';

interface PageLoaderProps {
   className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
   return (
      <div className={classNames(styles.PageLoader, {}, [className])}>
         <Loader />
      </div>
   );
};

export default PageLoader;
