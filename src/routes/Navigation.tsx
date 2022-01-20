import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink to="/LazyPage1" className={({isActive}) => isActive? 'nav-active' : ''}>LazyPage1</NavLink> 
            </li>
            <li>
              <NavLink to="/LazyPage2" className={({isActive}) => isActive? 'nav-active' : ''}>LazyPage2</NavLink>
            </li>
            <li>
              <NavLink to="/LazyPage3" className={({isActive}) => isActive? 'nav-active' : ''}>LazyPage3</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/LazyPage1" element={<LazyPage1 />}/>
          <Route path="/LazyPage2" element={<LazyPage2 />}/>
          <Route path="/LazyPage3" element={<LazyPage3 />}/>
          <Route path="/*" element={<Navigate to="/LazyPage1" replace/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
