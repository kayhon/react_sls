import React, { Component } from 'react';
import './App.css';
import Nav from './nav';
import Header from './header';
import Services from './services';
import Portfolio from './portfolio';
import About from './about';
import Team from './team';
import Form from './form';
import Contact from './contacts';
import Client from './clients';
import Footer from './footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Form />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <Contact />
        <Client />
        <Footer />
      </div>     
    );
  }
};

export default App;
