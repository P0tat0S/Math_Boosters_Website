import { Container, Typography, Box, CssBaseline } from '@mui/material';
import PropTypes from 'prop-types';
import AppAppBar from '../landing-page/components/AppAppBar';
import Footer from '../landing-page/components/Footer';

function TermsAndConditions({ mode, toggleColorMode }) {
  return (
    <>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 'bold' }}>
          Terms and Conditions
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            1. Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to Maths Booster. These Terms and Conditions govern your use of our services.
            By accessing or using our website and services, you agree to be bound by these terms.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            2. Services
          </Typography>
          <Typography variant="body1" paragraph>
            Maths Booster provides online tutoring services for mathematics education. Our services
            are provided on an "as is" basis without warranties of any kind.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            3. User Responsibilities
          </Typography>
          <Typography variant="body1" paragraph>
            You agree to use our services only for lawful purposes. You are responsible for maintaining
            the confidentiality of your account information and password.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            4. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph>
            All content on our website, including materials, tutorials, and educational resources,
            are the property of Maths Booster. You may not reproduce or distribute them without permission.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            5. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            To the fullest extent permitted by law, Maths Booster shall not be liable for any indirect,
            incidental, special, or consequential damages arising from your use of our services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            6. Changes to Terms
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to modify these terms at any time. Your continued use of our services
            following modifications constitutes your acceptance of the updated terms.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            7. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about these Terms and Conditions, please contact us at
            bcnwilliam@yahoo.com or call 07405716917.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

TermsAndConditions.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default TermsAndConditions;
