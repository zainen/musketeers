import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Info from './components/Info'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">

      <Router>
          <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/' >
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
