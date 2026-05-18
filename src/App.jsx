import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';

function App() {
  return (
    <div className="relative overflow-x-hidden bg-black">
      <Navigation />
      
      <div className="mx-3 rounded-3xl overflow-hidden bg-[#0d0d0f] relative">
        <GridBackground /> 
        <Hero />
        <Work />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
