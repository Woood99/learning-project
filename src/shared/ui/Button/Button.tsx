import { classNames } from '../../lib/classNames';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export type ButtonVariant = 'clear' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = props => {
   const { className, children, variant = 'clear', ...otherProps } = props;

   return (
      <button className={classNames(styles.Button, {}, [className, styles[variant]])} {...otherProps}>
         {children}
      </button>
   );
};

export default Button;
