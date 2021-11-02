//import logo from './logo.svg';
import './App.css';

import React from 'react';

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import IndexPages from './pages/IndexPages';
import ContactoPages from './pages/ContactoPages';
import ServiciosPages from './pages/ServiciosPages';
import PortfolioPages from './pages/PortfolioPages';


function App() {
  return (
    
      <Router>
      <Header/>
      <Nav/>
      <Main/>
      <Switch>
        <Route path="/" exact componentes={IndexPages}/>
        <Route path="/contacto" exact componentes={ContactoPages}/>
        <Route path="/servicios" exact componentes={ServiciosPages}/>
        <Route path="/portfolio" exact componentes={PortfolioPages}/>
      </Switch>
    
    <Footer/>
    </Router>
  );
}
export default App;
