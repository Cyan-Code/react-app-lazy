import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive? 'nav-active' : ''}>Shopping</NavLink> 
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => isActive? 'nav-active' : ''}>Users</NavLink>
            </li>
            <li>
              <NavLink to="/About" className={({isActive}) => isActive? 'nav-active' : ''}>About</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ShoppingPage />}/>
          <Route path="/users" element={<h1>Users</h1>}/>
          <Route path="/About" element={<h1>About</h1>}/>
          <Route path="/*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
