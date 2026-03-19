import React from 'react';
import { Container, Typography, Box, CssBaseline, Card, CardContent, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../landing-page/components/AppAppBar';
import Footer from '../landing-page/components/Footer';

export default function AboutUs() {
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
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          About Us
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            Welcome to Maths Booster, where we believe that every student can excel in mathematics.
            Our mission is to provide high-quality, personalized tutoring that builds confidence
            and drives academic success.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            At Maths Booster, we are dedicated to transforming how students learn mathematics.
            We recognize that every learner is unique, with different strengths, challenges, and goals.
            Our personalized approach ensures that each student receives the support they need to overcome
            obstacles and achieve their full potential.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
            Why Choose Us
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Expert Tutors
                  </Typography>
                  <Typography variant="body2">
                    Our team consists of experienced mathematics educators dedicated to helping students
                    understand concepts and build lasting confidence.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Personalized Learning
                  </Typography>
                  <Typography variant="body2">
                    We tailor our approach to each student's learning style, pace, and goals to ensure
                    maximum understanding and retention.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Flexible Scheduling
                  </Typography>
                  <Typography variant="body2">
                    We offer flexible lesson scheduling to accommodate busy lifestyles and ensure
                    consistent progress without compromising on quality.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Proven Results
                  </Typography>
                  <Typography variant="body2">
                    Our students consistently show improvement in their understanding and exam performance,
                    gaining the confidence they need to succeed.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about our services or would like to schedule a session,
            please don't hesitate to contact us. We're here to help you on your journey to mathematical success.
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> bcnwilliam@yahoo.com<br />
            <strong>Phone:</strong> 07405716917
          </Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
