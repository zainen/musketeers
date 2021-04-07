import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import About from './partials/About'
import Contact from './partials/Contact'
import Footer from './partials/Footer'
import Header from './partials/Header'
import Home from './partials/Home'
import Info from './partials/Info'

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about-fencing'>
            <About />
          </Route>  
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/about-us">
            <Info />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
