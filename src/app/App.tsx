import { Link } from 'react-router-dom';

import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/router';

import './styles/index.scss';

const App = () => {
   const { theme, toggleTheme } = useTheme();

   return (
      <div className={classNames('app', {}, [theme])}>
         <button onClick={toggleTheme}>Сменить тему</button>
         <Link to="/">Главная</Link>
         <Link to="/about">О сайте</Link>
         <Link to="/contacts">Контакты</Link>
         <AppRouter />
      </div>
   );
};

export default App;
