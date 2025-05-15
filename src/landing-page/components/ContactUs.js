import React, { useState } from 'react';
import { Typography, Box, Modal, Button, Link, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactUs = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEmailClick = () => {
        window.location.href = 'mailto:bcnwilliam@yahoo.com';
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:07405716917';
    };

    return (
        <div>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleOpen}
                sx={{ 
                    mt: -4,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: '8px',
                    textTransform: 'none',
                    boxShadow: (theme) =>
                        theme.palette.mode === 'light'
                            ? '0 4px 12px hsla(210, 98%, 42%, 0.2)'
                            : '0 4px 12px hsla(210, 100%, 25%, 0.3)',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: (theme) =>
                            theme.palette.mode === 'light'
                                ? '0 6px 16px hsla(210, 98%, 42%, 0.3)'
                                : '0 6px 16px hsla(210, 100%, 25%, 0.4)',
                    },
                    transition: 'all 0.2s ease-in-out',
                }}
            >
                Contact Us
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    width: { xs: '90%', sm: 400 },
                    bgcolor: 'background.paper',
                    borderRadius: '12px',
                    boxShadow: (theme) => 
                        theme.palette.mode === 'light'
                            ? '0 8px 24px hsla(210, 98%, 42%, 0.15)'
                            : '0 8px 24px hsla(210, 100%, 25%, 0.3)',
                    p: 4,
                    outline: 'none',
                }}>
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mb: 3
                    }}>
                        <Typography 
                            id="modal-modal-title" 
                            variant="h5" 
                            component="h2"
                            sx={{ 
                                fontWeight: 'bold',
                                color: 'primary.main'
                            }}
                        >
                            Contact Information
                        </Typography>
                        <IconButton 
                            onClick={handleClose}
                            sx={{ 
                                color: 'text.secondary',
                                '&:hover': {
                                    color: 'primary.main',
                                }
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 2.5,
                        '& > *': {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            borderRadius: '8px',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                bgcolor: 'action.hover',
                            }
                        }
                    }}>
                        <Box>
                            <PersonIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                            <Typography variant="body1">
                                William Fernandez
                            </Typography>
                        </Box>
                        
                        <Link
                            component="button"
                            onClick={handleEmailClick}
                            sx={{
                                textDecoration: 'none',
                                color: 'text.primary',
                                '&:hover': {
                                    color: 'primary.main',
                                }
                            }}
                        >
                            <EmailIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                            <Typography variant="body1">
                                bcnwilliam@yahoo.com
                            </Typography>
                        </Link>
                        
                        <Link
                            component="button"
                            onClick={handlePhoneClick}
                            sx={{
                                textDecoration: 'none',
                                color: 'text.primary',
                                '&:hover': {
                                    color: 'primary.main',
                                }
                            }}
                        >
                            <PhoneIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                            <Typography variant="body1">
                                07405716917
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default ContactUs;