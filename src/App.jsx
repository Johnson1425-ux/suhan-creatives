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
      
      {/* `isolate` scopes the z-indexes below so GridBackground can sit at z-0
          without escaping behind the page. The card paints no background of its
          own — GridBackground supplies the base surface. */}
      <div className="mx-3 mb-3 rounded-3xl overflow-hidden relative isolate">
        <GridBackground />

        <div className="relative z-10">
          <Hero />
          <Work />
          <About />
          <Services />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
