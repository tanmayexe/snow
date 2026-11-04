import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PDIShowcase from './components/PDIShowcase';
import UnderTheHood from './components/UnderTheHood';
import CodeQuality from './components/CodeQuality';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1f2937]">
      <Navbar />
      <Hero />
      <PDIShowcase />
      <UnderTheHood />
      <CodeQuality />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
