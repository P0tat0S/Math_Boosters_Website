import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

import MathBoostersIcon from './MathBoostersIcon';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://maths-booster.co.uk/">Maths Booster&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box display="flex" alignItems="center">
          <MathBoostersIcon />
          <Typography variant="h6" component="div">
            Maths Booster
          </Typography>
        </Box>
        
        
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Overview
          </Typography>
          <Link component={RouterLink} to="/pricing" color="text.secondary" variant="body2">
            Pricing
          </Link>
          <Link component={RouterLink} to="/faq" color="text.secondary" variant="body2">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Company
          </Typography>
          <Link component={RouterLink} to="/about" color="text.secondary" variant="body2">
            About us
          </Link>
          <Link component={RouterLink} to="/contact" color="text.secondary" variant="body2">
            Contact
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Legal
          </Typography>
          <Link component={RouterLink} to="/terms" color="text.secondary" variant="body2">
            Terms
          </Link>
          <Link component={RouterLink} to="/privacy" color="text.secondary" variant="body2">
            Privacy
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link component={RouterLink} to="/privacy" color="text.secondary" variant="body2">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link component={RouterLink} to="/terms" color="text.secondary" variant="body2">
            Terms of Service
          </Link>
          <Copyright />
        </div>
      </Box>
    </Container>
  );
}
