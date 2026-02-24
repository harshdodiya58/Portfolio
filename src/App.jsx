import { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <div
        className="App"
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease',
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
