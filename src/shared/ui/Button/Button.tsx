import { classNames } from '../../lib/classNames';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export type ButtonVariant = 'clear' | 'outline' | 'background' | 'backgroundInverted';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   variant?: ButtonVariant;
   size?: ButtonSize;
   square?: boolean;
}

const Button: FC<ButtonProps> = props => {
   const { className, children, variant = 'clear', size = 'm', square, ...otherProps } = props;

   const mods: Record<string, boolean> = {
      [styles.square]: square,
   };

   return (
      <button className={classNames(styles.Button, mods, [className, styles[variant], styles[`size-${size}`]])} {...otherProps}>
         {children}
      </button>
   );
};

export default Button;
