import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Text.module.scss';

interface TextProps {
   className?: string;
   title?: string;
   text?: string;
   variant?: 'normal' | 'error';
   children?: ReactNode;
}

const Text = (props: TextProps) => {
   const { className, title, text, variant = 'normal' } = props;

   return (
      <div className={classNames(styles.Text, {}, [className, styles[variant]])}>
         {title && <p className={styles.title}>{title}</p>}
         {text && <p className={styles.text}>{text}</p>}
      </div>
   );
};

export default Text;
