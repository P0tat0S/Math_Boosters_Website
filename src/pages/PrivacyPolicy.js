import React from 'react';
import { Container, Typography, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../landing-page/components/AppAppBar';
import Footer from '../landing-page/components/Footer';

export default function PrivacyPolicy() {
  const [mode, setMode] = React.useState('light');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 'bold' }}>
          Privacy Policy
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            1. Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            At Maths Booster, we are committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and safeguard your personal information.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            2. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We may collect information such as:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
            <ul>
              <li>Personal details (name, email, phone number)</li>
              <li>Educational background and learning preferences</li>
              <li>Session notes and progress tracking information</li>
              <li>Device and usage information (through cookies)</li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            3. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use your information to:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
            <ul>
              <li>Provide and improve our tutoring services</li>
              <li>Communicate with you about your progress</li>
              <li>Send updates and promotional materials (if you consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate technical and organizational measures to protect your personal data
            against unauthorized access, alteration, or disclosure.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            5. Sharing Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell or rent your personal information to third parties. We may share information
            with service providers who assist in operating our website and conducting our business.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            6. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to access, update, or delete your personal information. To exercise these
            rights, please contact us at bcnwilliam@yahoo.com.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            7. Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any significant
            changes by posting the new policy on this page.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            8. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy, please contact us at
            bcnwilliam@yahoo.com or call 07405716917.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
