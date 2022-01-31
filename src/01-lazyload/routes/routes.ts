import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;
interface Route {
  path: string,
  to: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string,
  children?:[]
}

const LazyPage1 = lazy(()=>import('../pages/LazyPage1'));
const LazyPage2 = lazy(()=>import('../pages/LazyPage1'));
const LazyPage3 = lazy(()=>import('../pages/LazyPage1'));

export const routes:Route[] = [
  {
    to: '/lazy1',
    path: '/lazy1',
    Component: LazyPage1,
    name: 'Lazy-Page-1'
  },
  {
    to: '/lazy2',
    path: '/lazy2',
    Component: LazyPage2,
    name: 'Lazy-Page-2'
  },
  {
    to: '/lazy3',
    path: '/lazy3',
    Component: LazyPage3,
    name: 'Lazy-Page-3'
  }
]