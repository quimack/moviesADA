import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
