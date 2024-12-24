import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Import from './Components/Pages/Import';
import Export from './Components/Pages/Export';
import ContactUs from './Components/Pages/ContactUs';
import OilSeedsAndPulses from './Components/Pages/Zala';
import Wezam from './Components/Pages/Wezam';
import Manufacturing from './Components/Pages/Manufacturing'; // Import the Manufacturing component
import OurProducts from './Components/Pages/OurProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/our-products' element={<OurProducts />} />

          <Route path='/import/*' element={<Import />} />
          <Route path='/export/*' element={<Export />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/zala' element={<OilSeedsAndPulses />} />
          <Route path='/wezam' element={<Wezam />} />
          <Route path='/manufacturing' element={<Manufacturing />} /> {/* Add Route for Manufacturing */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
