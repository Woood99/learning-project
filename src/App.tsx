import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/AboutPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
   const { theme, toggleTheme } = useTheme();

   return (
      <div className={classNames('app', {}, [theme])}>
         <button onClick={toggleTheme}>Сменить тему</button>
         <Link to="/">Главная</Link>
         <Link to="/about">О сайте</Link>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path="/" element={<MainPageAsync />} />
               <Route path="/about" element={<AboutPageAsync />} />
            </Routes>
         </Suspense>
      </div>
   );
};

export default App;
