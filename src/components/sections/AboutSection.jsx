import { Box, Heading } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <Box id="about-section">
      <Heading
        height={'90vh'}
        p={4}
        m={6}
        borderWidth={4}
        borderColor={'gray.600'}
        fontSize={64}
      >
        # About Me
      </Heading>
    </Box>
  );
};
export default AboutSection;
