import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
