import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { react_icon, nodejs_icon, django_icon } from '../../assets/icons';

const AboutSection = () => {
  return (
    <Box p={10}>
      <Heading as="h2" size="xl" mb={6}>
        À propos
      </Heading>

      <Text fontSize="lg" mb={4}>
        Autodidacte et passionné de technologie, J-M Phyrum UK est un
        développeur full-stack avec une expertise en React, Node.js, et Django.
        Fort d'une expérience solide dans la création d'applications web
        performantes et évolutives, il met un point d'honneur à allier
        innovation et accessibilité. Convaincu que le développement est avant
        tout une aventure humaine, il s'engage à créer des solutions qui
        répondent aux besoins des utilisateurs.
      </Text>

      <Stack direction="row" spacing={4} alignItems="center">
        {/* React Icon */}
        <Box display="flex" alignItems="center">
          <Image src={react_icon} alt="React" boxSize="24px" />
          <Text fontWeight="bold" ml={2}>
            React
          </Text>
        </Box>

        {/* Node.js Icon */}
        <Box display="flex" alignItems="center">
          <Image src={nodejs_icon} alt="Node.js" boxSize="24px" />
          <Text fontWeight="bold" ml={2}>
            Node.js
          </Text>
        </Box>

        {/* Django Icon */}
        <Box display="flex" alignItems="center">
          <Image src={django_icon} alt="Django" boxSize="24px" />
          <Text fontWeight="bold" ml={2}>
            Django
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutSection;
