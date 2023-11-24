import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// ...outros imports e código existente
import { Login } from './components/login';
import { Home } from './components/home';

export function App() {
  // ...seu código existente
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* Sua página de login */}
          <Login />
        </Route>
        <Route exact path="/home">
          {/* Sua página home */}
          <Home />
        </Route>
        <Redirect to="/" /> {/* Redireciona para a página inicial se a rota não for encontrada */}
      </Switch>
    </Router>
  );
}
