import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Import from './Components/Pages/Import';
import Export from './Components/Pages/Export';
import ContactUs from './Components/Pages/ContactUs';
import OilSeedsAndPulses from './Components/Pages/Zala';
import Wezam from './Components/Pages/Wezam';

function App() {
  return (
    <div className="App">
  
      <>

       <Router>
       
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about-us' Component={AboutUs}/>
        <Route path='/import' Component={Import}/>
        <Route path='/export' Component={Export}/>
        <Route path='/contact-us' Component={ContactUs}/>
        <Route path='/zala' Component={OilSeedsAndPulses}/>
        <Route path='/wezam' Component={Wezam}/>

      </Routes>

       </Router>

                   
      </>
    </div>
  );
}

export default App;
