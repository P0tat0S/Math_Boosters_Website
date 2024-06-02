import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Chip as MuiChip } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Filter1Icon from '@mui/icons-material/Filter1';
import FunctionsIcon from '@mui/icons-material/Functions';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import GridOnIcon from '@mui/icons-material/GridOn';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';
import backgroundLight from '../../images/feature-background-light.jpg';
import backgroundDark from '../../images/feature-background-dark.jpg';

const items = [
  {
    icon: <Filter1Icon />,
    title: 'Number',
    description:
      'This includes operations with numbers, fractions, decimals, percentages, powers, roots, and the use of standard form and significant figures.',
  },
  {
    icon: <FunctionsIcon />,
    title: 'Algebra',
    description:
      'Topics cover expressions, equations, inequalities, sequences, and graphing functions, including linear, quadratic, and other polynomial functions, as well as exponential and trigonometric functions.',
  },
  {
    icon: <AspectRatioIcon />,
    title: 'Ratio',
    description:
      'This includes working with ratios, proportional reasoning to solve problems, and understanding rates of change in various contexts.',
  },
  {
    icon: <GridOnIcon />,
    title: 'Geometry and Measures',
    description:
      'Students learn about angles, shapes, coordinates, area, volume, and the properties of circles. It also includes transformations and constructions.',
  },
  {
    icon: <ShowChartIcon />,
    title: 'Probability and Statistics',
    description:
      'This covers data collection, data presentation and analysis, averages, range, probability theories, and using these to solve problems.',
  },
  {
    icon: <LightbulbIcon />,
    title: 'Problem Solving',
    description:
      'Throughout the course, there is a strong emphasis on applying mathematical reasoning, making connections between topics, and solving complex problems.',
  },
  {
    icon: <SchoolIcon />,
    title: 'Functional Mathematics',
    description:
      'This involves using mathematics in practical and real-world contexts, often integrated within the other topic areas.',
  },
];

const Chip = styled(MuiChip)(({ theme, selected }) => ({
  ...(selected && {
    borderColor:
      theme.palette.mode === 'light'
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
    background:
      'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
    color: 'hsl(0, 0%, 100%)',
    '& .MuiChip-label': {
      color: 'hsl(0, 0%, 100%)',
    },
  }),
}));

export default function Features() {
  const theme = useTheme();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container 
      id="features" 
      maxWidth="false"
      sx={{ 
        py: { xs: 8, sm: 4 },
        backgroundImage: theme.palette.mode === 'light' 
          ? `url(${backgroundLight})` 
          : `url(${backgroundDark})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
       }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={12}>
            <Box>
              <Typography component="h2" variant="h4" color="text.primary" sx={{ mb: 2 }}>
                Teaching Contents
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: { xs: 2, sm: 4 } }}
              >
                The teaching content of an online Maths GCSE course in the UK typically covers the national curriculum set out for Key Stage 4, targeting students in Year 10 and Year 11. The curriculum is designed to prepare students for their GCSE examinations and usually includes the following areas:
              </Typography>
            </Box>
            <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
              {items.map(({ title }, index) => (
                <Chip
                  key={index}
                  label={title}
                  onClick={() => handleItemClick(index)}
                  selected={selectedItemIndex === index}
                  sx={{ textTransform: 'none' }}
                />
              ))}
            </Grid>
            <Card
              variant="outlined"
              sx={{
                display: { xs: 'auto', sm: 'none' },
                mt: 4,
              }}
            >
              <Box sx={{ px: 2, pb: 2 }}>
                <Typography color="text.primary" fontWeight="medium" gutterBottom>
                  {selectedFeature.title}
                </Typography>
                <Typography color="text.secondary" variant="body2" sx={{ mb: 1.5 }}>
                  {selectedFeature.description}
                </Typography>
              </Box>
            </Card>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              useFlexGap
              sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
            >
              {items.map(({ icon, title, description }, index) => (
                <Card
                  key={index}
                  component={Button}
                  onClick={() => handleItemClick(index)}
                  sx={(theme) => ({
                    p: 3,
                    height: 'fit-content',
                    width: '100%',
                    background: 'none',
                    ...(selectedItemIndex === index && {
                      backgroundColor: 'action.selected',
                      borderColor:
                        theme.palette.mode === 'light'
                          ? 'primary.light'
                          : 'primary.dark',
                    }),
                    '&:hover': {
                      background:
                        theme.palette.mode === 'light'
                          ? 'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)'
                          : 'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
                      borderColor:
                        theme.palette.mode === 'light'
                          ? 'primary.light'
                          : 'primary.dark',
                      boxShadow:
                        theme.palette.mode === 'light'
                          ? '0px 2px 8px hsla(0, 0%, 0%, 0.1)'
                          : '0px 1px 8px hsla(210, 100%, 25%, 0.5) ',
                    },
                  })}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      textAlign: 'left',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignItems: { md: 'center' },
                      gap: 2.5,
                    }}
                  >
                    <Box
                      sx={(theme) => ({
                        color:
                          theme.palette.mode === 'light' ? 'grey.400' : 'grey.600',
                        ...(selectedItemIndex === index && {
                          color: 'primary.main',
                        }),
                      })}
                    >
                      {icon}
                    </Box>
                    <div>
                      <Typography
                        color="text.primary"
                        fontWeight="medium"
                        gutterBottom
                      >
                        {title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ mb: 1.5,
                              textTransform: 'none'
                        }}
                      >
                        {description}
                      </Typography>
                    </div>
                  </Box>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
