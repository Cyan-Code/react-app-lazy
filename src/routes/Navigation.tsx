import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import logo from '../logo.svg';

import { routes } from '../01-lazyload/routes/routes';

export const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            {
              routes.map(({path, to, name})=>(
                <li key={path}>
                  <NavLink to={to} activeClassName='nav-active'>{name}</NavLink> 
                </li>
              ))
            }
          </ul>
        </nav>
        <Switch>
          {
            routes.map(({path, Component})=>(
              <Route
                key={path}
                path={path}
                render={()=><Component/>}
              />
            ))
          }
        </Switch>
      </div>
    </Router>
  )
}
