import React, { useState } from 'react';
import { Typography, Box, Modal, Button } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactUs = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleOpen}
                sx={{ mt: -4}}
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
                    width: 400, 
                    bgcolor: 'background.paper', 
                    border: '2px solid #0000ff',
                    boxShadow: 24, 
                    p: 4 
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Contact Information
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        <PersonIcon sx={{ mr: 1 }}  />  Name: William Fernandez
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        <EmailIcon sx={{ mr: 1 }} />  Email: bcnwilliam@yahoo.com
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        <PhoneIcon sx={{ mr: 1 }} />  Phone: 07405716917
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default ContactUs;