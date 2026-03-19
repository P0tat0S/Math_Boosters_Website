import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Card,
  CardContent,
  Avatar,
  Stack,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// Formspree form ID
const FORMSPREE_FORM_ID = 'myknorj';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      id="contact-form"
      maxWidth="sm"
      sx={{
        pt: { xs: 28, sm: 20 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Have questions? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
        </Typography>
      </Box>

      {submitted && (
        <Alert severity="success" onClose={() => setSubmitted(false)}>
          Thank you for your message! We'll get back to you soon.
        </Alert>
      )}

      {error && (
        <Alert severity="error" onClose={() => setError(false)}>
          Error submitting form. Please try again.
        </Alert>
      )}

      <Card sx={{
        backgroundColor: (theme) => theme.palette.mode === 'light' ? '#f5f5f5' : '#333',
        p: 2,
        mb: 2
      }}>
        <CardContent sx={{ '&:last-child': { pb: 2 } }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
            Or Contact Us Directly
          </Typography>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
                <PersonIcon />
              </Avatar>
              <Typography>William Fernandez</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
                <EmailIcon />
              </Avatar>
              <Typography component="a" href="mailto:bcnwilliam@yahoo.com" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}>
                bcnwilliam@yahoo.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
                <PhoneIcon />
              </Avatar>
              <Typography component="a" href="tel:+447405716917" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}>
                07405 716917
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          type="text"
          variant="outlined"
          required
          disabled={loading}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          required
          disabled={loading}
        />

        <TextField
          fullWidth
          label="Phone (optional)"
          name="phone"
          type="tel"
          variant="outlined"
          disabled={loading}
        />

        <TextField
          fullWidth
          label="Message"
          name="message"
          type="text"
          multiline
          rows={5}
          variant="outlined"
          required
          disabled={loading}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ textTransform: 'none', mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Send Message'}
        </Button>
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
        We'll get back to you within 24 hours.
      </Typography>
    </Container>
  );
}
