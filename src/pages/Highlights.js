import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import AppAppBar from '../landing-page/components/AppAppBar';
import HighlightsSection from '../landing-page/components/Highlights';
import Footer from '../landing-page/components/Footer';

function Highlights({ mode, toggleColorMode }) {
  return (
    <>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ bgcolor: 'background.default' }}>
        <HighlightsSection />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}

Highlights.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Highlights;
