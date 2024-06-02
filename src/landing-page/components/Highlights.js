import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import FeedbackIcon from '@mui/icons-material/Feedback';

const items = [
  {
    icon: <VideoCallIcon />,
    title: 'Adaptable Learning',
    description:
      'Our online classes adjust to your pace, enhancing comprehension and retention.',
  },
  {
    icon: <SchoolIcon />,
    title: 'Quality Instruction',
    description:
      'Our classes are designed and conducted by experienced educators, ensuring a solid foundation.',
  },
  {
    icon: <GroupIcon />,
    title: 'Interactive Sessions',
    description:
      'Our video calls allow for real-time interaction, making learning more engaging and effective.',
  },
  {
    icon: <LightbulbIcon />,
    title: 'Innovative Teaching Techniques',
    description:
      'We employ modern teaching methods that cater to different learning styles.',
  },
  {
    icon: <ContactSupportIcon />,
    title: 'Dedicated Support',
    description:
      'Our support team is always ready to assist with any technical issues or academic queries.',
  },
  {
    icon: <FeedbackIcon />,
    title: 'Personalized Feedback',
    description:
      'Receive detailed feedback on your progress to help you improve and succeed.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'hsl(220, 30%, 2%)',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'hsla(220, 25%, 25%, .3)',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                  boxShadow: 'none',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
