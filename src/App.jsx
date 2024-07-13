import { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About'
import Technologies from './components/Technologies';
import Experiance from './components/Experiance';
import Project from './components/Project';
import Contact from './components/Contact';
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const [count, setCount] = useState(0);
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 left-0 z-[-10] h-full w-full'>
      <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero />
        <About/>
        <Technologies/>
        <Experiance/>
        <Project/>
        <Contact/>
        
      </div>
    </div>
  );
}

export default App;
