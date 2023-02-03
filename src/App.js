// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './phone.css';
import { Route, Switch } from "react-router";
import Home from './Home';
import About from './About';
// import Slider from './Slider';
import Footer from './Footer';
import Sponsers from './Sponsers/Sponsers';
import Navbar from './Navbar';
import Merch from './Merchandise/Merch';
const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/">
        <Home/>
        <About/>
      </Route>
      <Route exact path="/sponsers">
        <Sponsers/>
      </Route>
      <Route exact path="/merchandise">
        <Merch/>
      </Route>
    </Switch>
    <Footer/>
    {/* <Slider/> */}
    </>
  );
};

export default App;
