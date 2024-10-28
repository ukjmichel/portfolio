import { Box, Heading, Stack, Text, Link, Image, Grid } from '@chakra-ui/react';
import * as Icons from '../../assets/icons';
import { useEffect, useState } from 'react';

const technologyIcons = {
  react: Icons.react_icon,
  django: Icons.django_icon,
  drf: Icons.drf_icon,
  nodejs: Icons.nodejs_icon,
  expressjs: Icons.expressjs_icon,
  mongodb: Icons.mongodb_icon,
  js: Icons.js_icon,
  github: Icons.github_icon,
  stripe: Icons.stripe_icon,
  html: Icons.html_icon,
  css: Icons.css_icon,
  lighthouse: Icons.lighthouse_icon,
  og: Icons.og_icon,
  figma: Icons.figma_icon,
};

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/project.json'); // Update with your JSON file path
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setProjects(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box px={10} id="projects-section">
      <Heading as="h2" size="xl" mb={6}>
        Projets
      </Heading>

      {/* Grid Container for Projects */}
      <Grid
        templateColumns={{
          base: '1fr', // Single column on small screens
          lg: '1fr 1fr', // 2 columns on large screens (lg)
          '2xl': '1fr 1fr 1fr', // 3 columns on extra-large screens (fullHd or 1920px and up)
        }}
        gap={6} // Space between grid items
      >
        {projects.map((project, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">
              {project.title}
            </Heading>
            <Text mt={2}>{project.description}</Text>
            <Stack direction="row" spacing={2} mt={2}>
              {project.technologie.map((tech) => (
                <Image
                  key={tech}
                  src={technologyIcons[tech]}
                  alt={tech}
                  boxSize="40px" // Set the desired size for the icons
                />
              ))}
            </Stack>
            <Box mt={2}>
              {project.links.map((link, linkIndex) => (
                <span key={linkIndex}>
                  <Link color="blue.500" href={link.url} isExternal>
                    {link.name}
                  </Link>
                  {linkIndex < project.links.length - 1 && ' | '}
                </span>
              ))}
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectSection;
