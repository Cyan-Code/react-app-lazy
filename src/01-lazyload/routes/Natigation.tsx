import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import {LazyPage1, LazyPage2, LazyPage3} from '../pages/index';

export const Natigation = () => {

  const {path, url} = useRouteMatch();

  return (
  <>
    <h2>Lazy LazyLayout Pages</h2>
    <ul>
      <li>
        <Link to={`${url}/lazyPage1`}>LazyPage1</Link>
      </li>
      <li>
        <Link to={`${url}/lazyPage1`}>LazyPage2</Link>
      </li>
      <li>
        <Link to={`${url}/lazyPage1`}>LazyPage3</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path={`${path}/lazyPage1`}><LazyPage1/></Route>
      <Route exact path={`${path}/lazyPage2`}><LazyPage2/></Route>
      <Route exact path={`${path}/lazyPage3`}><LazyPage3/></Route>
    </Switch>
  </>
  )
};
