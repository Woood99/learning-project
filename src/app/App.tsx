import { Suspense } from 'react';

import { AppRouter } from './providers/router';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Counter } from 'entities/Counter';

const App = () => {
   return (
      <div className="app">
         <Suspense fallback="">
            <Navbar />
            <div className="flex">
               <Sidebar />
               <Counter />
               <div className="grow p-5">
                  <AppRouter />
               </div>
            </div>
         </Suspense>
      </div>
   );
};

export default App;
