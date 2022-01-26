import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import {LazyPage1, LazyPage2, LazyPage3} from '../pages';

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout</h1>
      <ul>
        <li>
          <NavLink to="lazyPage1" >LazyPage1</NavLink>
        </li>
        <li>
          <NavLink to="lazyPage2" >LazyPage2</NavLink>
        </li>
        <li>
          <NavLink to="lazyPage3" >LazyPage3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazyPage1" element={<LazyPage1 />} />
        <Route path="lazyPage2" element={<LazyPage2 />} />
        <Route path="lazyPage3" element={<LazyPage3 />} />
        <Route path="*" element={ <Navigate replace to="lazyPage1"/> }/>
      </Routes>
    </div>
  )
};

export default LazyLayout;
