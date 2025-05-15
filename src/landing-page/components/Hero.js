import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import classroom from '../../images/classroom.jpg';
import { styled } from '@mui/material/styles';
import ContactUs from './ContactUs';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '80%',
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    theme.palette.mode === 'light'
      ? '0 0 12px 8px hsla(220, 25%, 80%, 0.2)'
      : '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
  outline: '1px solid',
  backgroundImage: `url(${
    theme.palette.mode === 'light'
      ? '/static/images/templates/templates-images/hero-light.png'
      : '/static/images/templates/templates-images/hero-dark.png'
  })`,
  backgroundSize: 'cover',
  outlineColor:
    theme.palette.mode === 'light'
      ? 'hsla(220, 25%, 80%, 0.5)'
      : 'hsla(210, 100%, 80%, 0.1)',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 500,
  },
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          useFlexGap
          sx={{ width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Conquer GCSE Maths with confidence!
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            Unlock your potential with our Online Math course, designed to boost GCSE scores. Enhance your skills with high-quality resources and expert guidance, ensuring top-tier results and academic success.
          </Typography>
          
          {/* CTA Button */}
          <Box sx={{ mt: 2 }}>
            <ContactUs />
          </Box>
        </Stack>

        <Card
          sx={{
            mt: 4,
            mb: 4,
            width: { xs: '100%', sm: '80%' },
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? 'primary.light'
                : 'primary.dark',
            color: 'white',
            textAlign: 'center',
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Free 30-Minute Online Lesson & Consultation
            </Typography>
            <Typography variant="body1">
              Book your free trial session today and experience our teaching methods firsthand
            </Typography>
          </CardContent>
        </Card>

        <StyledBox 
          id="image"
          sx={{
            backgroundImage: `url(${classroom})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
      </Container>
    </Box>
  );
}
