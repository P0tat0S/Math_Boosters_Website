import React from 'react';
import Box from '@mui/material/Box';
import MathBoostersSrc from '../../images/math-boosters-icon.png';

const MathBoostersIcon = () => (
  <Box sx={{ height: 60, width: 60, mr: 2 }}>
    <img 
      src={MathBoostersSrc}
      alt="Site Icon" 
      style={{ width: '100%', height: '100%' }}
    />
  </Box>
);

export default MathBoostersIcon;