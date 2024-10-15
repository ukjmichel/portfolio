import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { react_icon, nodejs_icon, django_icon } from '../../assets/icons';

const techno = [
  {
    name: 'React',
    icon: react_icon,
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    name: 'Node.js',
    icon: nodejs_icon,
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    name: 'Django',
    icon: django_icon,
    description:
      'A high-level Python web framework that encourages rapid development and clean, pragmatic design.',
  },
];

const AboutSection = () => {
  return (
    <Box p={10}>
      <Heading as="h2" size="xl" mb={6}>
        À propos
      </Heading>

      <Text fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }} mb={4}>
        Autodidacte et passionné de technologie, J-M Phyrum UK est un
        développeur full-stack avec une expertise en React, Node.js, et Django.
        Fort d'une expérience solide dans la création d'applications web
        performantes et évolutives, il met un point d'honneur à allier
        innovation et accessibilité. Convaincu que le développement est avant
        tout une aventure humaine, il s'engage à créer des solutions qui
        répondent aux besoins des utilisateurs.
      </Text>

      <Stack direction="row" spacing={4} alignItems="center">
        {techno.map(({ name, icon, description }) => (
          <Box display="flex" alignItems="center">
            <Image
              src={icon}
              alt={name}
              description={description}
              boxSize={{ base: '32px', md: '34px', lg: '36px' }}
            />
            <Text
              fontWeight="bold"
              ml={2}
              fontSize={{ base: '18px', md: '20px', lg: '22px' }}
            >
              {name}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default AboutSection;
