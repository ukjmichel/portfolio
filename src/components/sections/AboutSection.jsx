import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
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
  // Define background and text colors for light and dark themes
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // Background color
  const textColor = useColorModeValue('gray.800', 'white'); // Text color
  const headingColor = useColorModeValue('gray.900', 'gray.100'); // Heading color

  return (
    <Box
      m={5}
      p={8}
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      id="about-section"
    >
      <Heading as="h2" size={{ base: 'xl' }} mb={6} color={headingColor}>
        À propos
      </Heading>

      <Text
        fontSize={{
          base: '18px',
          md: '24px',
        }}
        mb={4}
        color={textColor}
      >
        Autodidacte et passionné de technologie, je me présente comme un
        développeur full-stack avec une expertise en React, Node.js, et Django.
        Fort d'une expérience solide dans la création d'applications web
        performantes et évolutives, je met un point d'honneur à allier
        innovation et accessibilité. Convaincu que le développement est avant
        tout une aventure humaine, je m'engage à créer des solutions qui
        répondent aux besoins des utilisateurs.
      </Text>

      <Stack direction="row" spacing={4} alignItems="center">
        {techno.map(({ name, icon }) => (
          <Box key={name} display="flex" alignItems="center">
            <Image
              src={icon}
              alt={name}
              boxSize={{ base: '40px', md: '34px', lg: '34px' }}
            />
            <Text
              fontWeight="bold"
              ml={2}
              fontSize={{ base: '18px', md: '20px' }}
              color={textColor} // Set text color based on theme
              fontFamily={'droxen'}
              display={{ base: 'none', md: 'block' }}
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
