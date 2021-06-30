import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
const TheLayout = React.lazy(() => import('./containers/index'));
const Login = React.lazy(() => import('./views/auth-view/Login'));



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  // token 
  return (
    <>
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </>
  );
}

export default App;
