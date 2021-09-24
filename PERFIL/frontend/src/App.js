//import logo from './logo.svg';
//import './App.css';

import React from 'react';

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePages from './pages/HomePages';
import InicioPages from './pages/InicioPages';
import ContactoPages from './pages/ContactoPages';
import AcercadePages from './pages/AcercadePages';
import PortfolioPages from './pages/PortfolioPages';


function App() {
  return (
    
      <Router>
      <Header/>
      <Nav/>
      
      <Switch>
        <Route path="/" exact componentes={HomePages}/>
        <Route path="/inicio" exact componentes={InicioPages}/>
        <Route path="/contacto" exact componentes={ContactoPages}/>
        <Route path="/acercade" exact componentes={AcercadePages}/>
        <Route path="/portfolio" exact componentes={PortfolioPages}/>
      </Switch>
    
    <Footer/>
    </Router>
  );
}
export default App;
