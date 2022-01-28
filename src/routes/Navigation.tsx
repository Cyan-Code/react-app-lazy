import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import logo from '../logo.svg';

import { LazyPage2, LazyPage1, LazyPage3 } from '../01-lazyload/pages';

export const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink to="/lazy 1" activeClassName='nav-active'>lazy 1</NavLink> 
            </li>
            <li>
              <NavLink to="/lazy 2" activeClassName='nav-active'>lazy 2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy 3" activeClassName='nav-active'>lazy 3</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <LazyPage1/>
          </Route>
          <Route path="/users">
            <LazyPage2/>
          </Route>
          <Route path="/">
            <LazyPage3/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
