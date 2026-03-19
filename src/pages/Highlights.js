import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../landing-page/components/AppAppBar';
import HighlightsSection from '../landing-page/components/Highlights';
import Footer from '../landing-page/components/Footer';

export default function Highlights() {
  const [mode, setMode] = React.useState('light');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ bgcolor: 'background.default' }}>
        <HighlightsSection />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
