import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Login } from './components/login';
import { Home } from './components/home';

export function App() {

  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Redirect to="/" /> 
      </Switch>
    </Router>
  );
}
