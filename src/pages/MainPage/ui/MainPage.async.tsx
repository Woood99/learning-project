import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./index'));

export const MainPageAsync = lazy(
   () =>
      new Promise(resolve => {
         // @ts-ignore
         // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
         setTimeout(() => resolve(import('./index')), 1500);
      })
);
