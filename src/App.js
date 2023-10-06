// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';
// import './phone.css';
import { Route, Switch } from "react-router";
import Home from './Home';
// import Slider from './Slider';
import Sponsers from './Sponsers/Sponsers';
import Merch from './Merchandise/Merch';
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/sponsers">
          <Sponsers/>
        </Route>
        <Route exact path="/merchandise">
          <Merch/>
        </Route>
      </Switch>
    {/* <Slider/> */}
    </>
  );
};

export default App;
