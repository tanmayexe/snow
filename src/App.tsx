import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PDIShowcase from './components/PDIShowcase';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1f2937]">
      <Navbar />
      <Hero />
      <PDIShowcase />
      <TechnicalSkills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
