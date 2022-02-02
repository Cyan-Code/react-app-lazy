import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;
interface Route {
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string,
  children?:[]
}


export const routes:Route[] = [
  {
    path: '/lazyLayout',
    Component: lazy( ()=>import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout') ),
    name: 'lazyLayout Nested'
  },
  {
    path: '/nolazy',
    Component: NoLazy,
    name: 'NolazyLayout'
  }
]