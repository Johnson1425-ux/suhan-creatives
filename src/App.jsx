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
    <div className="relative overflow-x-hidden">
      <GridBackground />
      
      <Navigation />
      <Hero />
      <Work />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
