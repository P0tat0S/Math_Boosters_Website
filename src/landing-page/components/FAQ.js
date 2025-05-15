import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container 
      id="faq" 
      maxWidth="false"
      sx={{ 
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
        backgroundColor: theme.palette.mode === 'light' 
          ? 'lightblue' 
          : '#0D2448',
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
            mb: 2,
            fontWeight: 'bold',
          }}
        >
          Frequently asked questions
        </Typography>
        <Box sx={{ 
          width: '100%',
          '& .MuiAccordion-root': {
            mb: 2,
            borderRadius: '8px !important',
            '&:before': {
              display: 'none',
            },
            '&.Mui-expanded': {
              boxShadow: (theme) =>
                theme.palette.mode === 'light'
                  ? '0 4px 12px hsla(210, 98%, 42%, 0.1)'
                  : '0 4px 12px hsla(210, 100%, 25%, 0.2)',
            },
          },
          '& .MuiAccordionSummary-root': {
            borderRadius: '8px',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          },
          '& .MuiAccordionSummary-content': {
            my: 1.5,
          },
        }}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component="h3" variant="subtitle1" fontWeight="medium">
                What topics are covered in the GCSE Maths course?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{ maxWidth: { sm: '100%', md: '100%' } }}
              >
                The course covers all topics required by the GCSE syllabus including Number, Algebra, Ratio and Proportion, Geometry and Measures, Probability, and Statistics. We ensure comprehensive coverage that prepares students for their exams.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography component="h3" variant="subtitle1" fontWeight="medium">
                How are the lessons delivered?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{ maxWidth: { sm: '100%', md: '100%' } }}
              >
                Lessons are delivered online through a virtual classroom environment. We use video conferencing tools that allow for live interaction between the tutor and the students. All sessions are also recorded, so students can review them later.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="h3" variant="subtitle1" fontWeight="medium">
                Can I join the course at any time?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{ maxWidth: { sm: '100%', md: '100%' } }}
              >
                Yes, we offer rolling enrollment for some of our courses, allowing students to join at various points throughout the year. However, some structured courses have specific start dates to ensure cohort progression and comprehensive topic coverage.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography component="h3" variant="subtitle1" fontWeight="medium">
                What qualifications do your tutors have?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{ maxWidth: { sm: '100%', md: '100%' } }}
              >
                All our tutors are qualified teachers with at least a university degree in Mathematics or a related field. They have extensive experience in teaching GCSE Maths and have undergone thorough background checks.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography component="h3" variant="subtitle1" fontWeight="medium">
                How do you tailor your tutoring to individual needs?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{ maxWidth: { sm: '100%', md: '100%' } }}
              >
                We begin with an assessment to identify each student's strengths and weaknesses. Based on the assessment, we develop a personalized learning plan tailored to each student's needs, ensuring they receive targeted support in areas where they need it most.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel6'}
            onChange={handleChange('panel6')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography component="h3" variant="subtitle1" fontWeight="medium">
                What is the typical class size for group sessions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{ maxWidth: { sm: '100%', md: '100%' } }}
              >
                Our group sessions are kept small, typically between 5-10 students, to ensure each student receives individual attention while also benefiting from the dynamics of group learning.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Container>
  );
}
