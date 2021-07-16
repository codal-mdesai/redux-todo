import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Currency from './components/Currency';
const App = () => {
  return (
    <>
    <nav>
      <NavLink to={"/"}>Home</NavLink>
    </nav>
    <Switch>
      <Route path={"/"} exact component={Currency}></Route>
      <Redirect to={"/"} />
    </Switch>
    </>
  )
}
export default App;