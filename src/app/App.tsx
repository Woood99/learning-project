import { Suspense, useEffect } from 'react';

import { AppRouter } from './providers/router';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Counter } from 'entities/Counter';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(userActions.initAuthData());
   }, []);

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
