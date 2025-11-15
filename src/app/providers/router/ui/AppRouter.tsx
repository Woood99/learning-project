import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
   return (
      <Suspense fallback={<PageLoader />}>
         <Routes>
            {Object.values(routeConfig).map(({ path, element }) => {
               return <Route key={path} path={path} element={element} />;
            })}
         </Routes>
      </Suspense>
   );
};

export default AppRouter;
