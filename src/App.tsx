import { useEffect } from 'react';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles.css';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--background-color);
  color: var(--text-color);
  overflow-x: hidden;
`;

const App = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', function(this: Element, e: Event) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
        anchor.removeEventListener('click', function(this: Element, e: Event) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href') || '');
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    };
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Contact />
    </AppContainer>
  );
};

export default App;
