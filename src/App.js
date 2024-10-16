import { useState, useEffect } from 'react';
import Careers from './Components/Careers';
import logo from './loglogo.png';
import './App.css';
import Home from './Components/Home';
import Garage from './Components/Garage';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';

function App() {
  const [visibleComponent, setVisibleComponent] = useState('home');
  const [isApplicationFormVisible, setIsApplicationFormVisible] = useState(false);
  const isDesktop = window.innerWidth >= 601;
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setIsNavVisible(isDesktop);
  }, [isDesktop]);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const showCareers = () => {
    setVisibleComponent('careers');
    setIsApplicationFormVisible(false);
    if (!isDesktop) toggleNav();
  };

  const showHome = () => {
    setVisibleComponent('home');
    if (!isDesktop) toggleNav();
  };

  const showGarage = () => {
    setVisibleComponent('garage');
    if (!isDesktop) toggleNav();
  };

  const showContact = () => {
    setVisibleComponent('contact');
    if (!isDesktop) toggleNav();
  };

  const showLogin = () => {
    setVisibleComponent('login');
    if (!isDesktop) toggleNav();
  };

  return (
    <div className="App">
      {!isApplicationFormVisible && (
        <button className="nav-toggle" onClick={toggleNav}>{isNavVisible ? 'Close' : 'Menu'}</button>
      )}
      <nav className={`App-nav ${isNavVisible ? 'open' : ''}`.trim()}>
        <img src={logo} alt="Logo" className="nav-logo" onClick={showHome} />
        <a className="App-nav-item" href="#home" onClick={showHome}>Home</a>
        {/* <a className="App-nav-item" href="#garage" onClick={showGarage}>Garage</a> */}
        <a className="App-nav-item" href="#careers" onClick={showCareers}>Careers</a>
        <a className="App-nav-item" href="#contact" onClick={showContact}>Contact</a>
        {/* <a className="App-nav-item" href="#login" onClick={showLogin}>Sign In</a> */}
      </nav>
      <header className="App-header">
        {visibleComponent === 'garage' && <Garage />}
        {visibleComponent === 'login' && <Login />}
        {visibleComponent === 'home' && <Home />}
        {visibleComponent === 'careers' && <Careers setIsApplicationFormVisible={setIsApplicationFormVisible} />}
        {visibleComponent === 'contact' && <Contact />}
      </header>
    </div>
  );
}

export default App;
