import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXElement = () => JSX.Element;

interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXElement> | JSXElement
  name: string
}

const LazyLayout = lazy( ()=> import(/* webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
  {
    to:'/lazyLayout/',
    path:'/LazyLayout/*',
    Component: LazyLayout,
    name: 'LazyLayout'
  },
  {
    to:'/no-Lazy',
    path:'no-Lazy',
    Component: NoLazy,
    name: 'No lazy'
  }
]