import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import AppAppBar from '../landing-page/components/AppAppBar';
import PricingComponent from '../landing-page/components/Pricing';
import Footer from '../landing-page/components/Footer';

function Pricing({ mode, toggleColorMode }) {
  return (
    <>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ bgcolor: 'background.default' }}>
        <PricingComponent />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}

Pricing.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Pricing;
