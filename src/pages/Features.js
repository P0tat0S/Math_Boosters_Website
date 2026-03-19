import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import AppAppBar from '../landing-page/components/AppAppBar';
import FeaturesSection from '../landing-page/components/Features';
import Footer from '../landing-page/components/Footer';

function Features({ mode, toggleColorMode }) {
  return (
    <>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ bgcolor: 'background.default' }}>
        <FeaturesSection />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}

Features.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Features;
