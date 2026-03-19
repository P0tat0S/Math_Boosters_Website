import { Box, Card, CardContent, Container, Grid, Typography, Avatar, Rating } from '@mui/material';

const testimonials = [
  {
    name: 'Sarah Johnson',
    grade: 'Grade 9',
    rating: 5,
    text: 'Maths Booster transformed my understanding of mathematics. The personalized approach helped me improve from a C to an A in just 6 months!',
    initials: 'SJ',
  },
  {
    name: 'Michael Chen',
    grade: 'GCSE',
    rating: 5,
    text: 'The tutoring sessions were incredibly helpful. I gained confidence in problem-solving and scored 8 in my final GCSE exam!',
    initials: 'MC',
  },
  {
    name: 'Emma Williams',
    grade: 'Grade 10',
    rating: 5,
    text: 'Best tutoring experience ever! The flexible schedule and clear explanations made learning enjoyable. Highly recommended!',
    initials: 'EW',
  },
];

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      maxWidth="lg"
      sx={{
        pt: { xs: 28, sm: 20 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 6 },
      }}
    >
      <Box sx={{ textAlign: 'center', maxWidth: 600 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
          What Our Students Say
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Join hundreds of students who have transformed their GCSE maths results with Maths Booster.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 3,
                borderRadius: 2,
                boxShadow: 1,
                '&:hover': {
                  boxShadow: 3,
                  transform: 'translateY(-4px)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <CardContent sx={{ pb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', color: 'white' }}>
                    {testimonial.initials}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.grade}
                    </Typography>
                  </Box>
                </Box>
                <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  "{testimonial.text}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
