import { classNames } from 'shared/lib/classNames';
import styles from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export type AppLinkVariant = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
   className?: string;
   variant?: AppLinkVariant;
}

const AppLink: FC<AppLinkProps> = props => {
   const { to, className, children, variant = 'primary', ...otherProps } = props;

   return (
      <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[variant]])} {...otherProps}>
         {children}
      </Link>
   );
};

export default AppLink;
