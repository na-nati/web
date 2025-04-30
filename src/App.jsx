import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Works from './Components/Works';
import Contact from './Components/Contact';
import SidebarLine from './Components/SidebarLine';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <SidebarLine/>
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer/>
    </Router>
  );
};

export default App;
