import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import AppAppBar from '../landing-page/components/AppAppBar';
import TestimonialsSection from '../landing-page/components/Testimonials';
import Footer from '../landing-page/components/Footer';

function Testimonials({ mode, toggleColorMode }) {
  return (
    <>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ bgcolor: 'background.default' }}>
        <TestimonialsSection />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}

Testimonials.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Testimonials;
