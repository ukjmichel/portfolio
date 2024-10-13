import { Box, Heading, Stack, Text, Button } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box p={10} h={{ base: '30vh', md: '50vh' }}>
      <Heading as="h1" size="2xl" mb={4}>
        J-M Phyrum UK
      </Heading>
      <Text fontSize="xl" mb={6}>
        Développeur Full-Stack | React, Node.js, Django
      </Text>
      <Stack direction="row" spacing={4} justify="start">
        <Button colorScheme="blue">Voir mes projets</Button>
        <Button variant="outline" colorScheme="blue">
          Me contacter
        </Button>
      </Stack>
    </Box>
  );
};
export default HeroSection;
