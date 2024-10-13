import { Box, Heading, Stack, Text, Link, Image } from '@chakra-ui/react';
import {
  react_icon,
  django_icon,
  drf_icon,
  nodejs_icon,
  expressjs_icon,
  mongodb_icon,
  js_icon,
  github_icon,
  stripe_icon,
} from '../../assets/icons';

const technologyIcons = {
  react: react_icon,
  django: django_icon,
  drf: drf_icon,
  nodejs: nodejs_icon,
  expressjs: expressjs_icon,
  mongodb: mongodb_icon,
  js: js_icon,
  github: github_icon,
  stripe: stripe_icon,
};

const ProjectSection = () => {
  const projects = [
    {
      title: 'Application web de location immobilière avec React',
      technologie: ['react'],
      description: 'Application web de location',
      links: [
        {
          url: 'https://github.com/ukjmichel/OC_devwev_p5.git',
          name: 'Lien front-end',
        },
      ],
    },
    {
      title: 'API avec Node.js et Express',
      technologie: ['nodejs', 'expressjs', 'mongodb'],
      description: 'API sécurisée pour une application mobile',
      links: [
        {
          url: 'https://github.com/ukjmichel/OC_devwev_p6.git',
          name: 'Lien API',
        },
      ],
    },
    {
      title: 'Click and Collect avec React et Django',
      technologie: ['react', 'django', 'drf', 'stripe'],
      description: 'API sécurisée pour une application mobile',
      links: [
        {
          url: 'https://github.com/ukjmichel/lm_drive',
          name: 'Lien front-end',
        },
        {
          url: 'https://github.com/ukjmichel/lm_drive_api.git',
          name: 'Lien API',
        },
      ],
    },
  ];

  return (
    <Box p={10}>
      <Heading as="h2" size="xl" mb={6}>
        Projets
      </Heading>
      <Stack spacing={4}>
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
      </Stack>
    </Box>
  );
};

export default ProjectSection;
