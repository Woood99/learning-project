import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/router';

import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
   const { theme } = useTheme();

   return (
      <div className={classNames('app', {}, [theme])}>
         <Suspense fallback="">
            <Navbar />
            <div className="flex">
               <Sidebar />
               412421412
               <div className="grow p-5">
                  <AppRouter />
               </div>
            </div>
         </Suspense>
      </div>
   );
};

export default App;
