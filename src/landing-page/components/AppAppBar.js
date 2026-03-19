import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ToggleColorMode from './ToggleColorMode';

import MathBoostersIcon from './MathBoostersIcon';

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'hsla(220, 60%, 99%, 0.6)'
                : 'hsla(220, 0%, 0%, 0.7)',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)'
                : '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)',
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              px: 0,
            }}
          >
            <MathBoostersIcon />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={RouterLink}
                to="/"
                variant="text"
                color="info"
                size="medium"
                sx={{ textTransform: 'none', marginRight: 2 }}
              >
                Maths Booster
              </Button>
              <Button
                component={RouterLink}
                to="/features"
                variant="text"
                color="info"
                size="medium"
                sx={{ textTransform: 'none', marginRight: 2 }}
              >
                Contents
              </Button>
              <Button
                component={RouterLink}
                to="/highlights"
                variant="text"
                color="info"
                size="medium"
                sx={{ textTransform: 'none', marginRight: 2 }}
              >
                Highlights
              </Button>
              <Button
                component={RouterLink}
                to="/pricing"
                variant="text"
                color="info"
                size="medium"
                sx={{ textTransform: 'none', marginRight: 2 }}
              >
                Pricing
              </Button>
              <Button
                component={RouterLink}
                to="/faq"
                variant="text"
                color="info"
                size="medium"
                sx={{ minWidth: 0, textTransform: 'none', marginRight: 2 }}
              >
                FAQ
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: 'background.default',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem component={RouterLink} to="/features" onClick={toggleDrawer(false)}>
                  Contents
                </MenuItem>
                <MenuItem component={RouterLink} to="/highlights" onClick={toggleDrawer(false)}>
                  Highlights
                </MenuItem>
                <MenuItem component={RouterLink} to="/pricing" onClick={toggleDrawer(false)}>
                  Pricing
                </MenuItem>
                <MenuItem component={RouterLink} to="/faq" onClick={toggleDrawer(false)}>FAQ</MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
