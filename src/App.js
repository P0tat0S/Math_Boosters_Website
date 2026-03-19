import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import Features from './pages/Features';
import Highlights from './pages/Highlights';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';

function App() {
  const [mode, setMode] = React.useState('light');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="/features" element={<Features mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="/highlights" element={<Highlights mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="/pricing" element={<Pricing mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="/faq" element={<FAQ mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="/testimonials" element={<Testimonials mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="/contact" element={<Contact mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="/terms" element={<TermsAndConditions mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="/privacy" element={<PrivacyPolicy mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="/about" element={<AboutUs mode={mode} toggleColorMode={toggleColorMode} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;