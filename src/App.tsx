import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import PDIShowcase from './components/PDIShowcase';
import UnderTheHood from './components/UnderTheHood';
import CodeQuality from './components/CodeQuality';
import Experience from './components/Experience';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Parallax effect for sections
    gsap.utils.toArray('section').forEach((section) => {
      const element = section as HTMLElement;
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Floating animation for cards
    gsap.utils.toArray('.card-hover').forEach((card, i) => {
      const element = card as HTMLElement;
      gsap.to(element, {
        y: -10,
        duration: 2 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1f2937] overflow-x-hidden">
      <Navbar />
      <Hero3D />
      <PDIShowcase />
      <UnderTheHood />
      <CodeQuality />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
