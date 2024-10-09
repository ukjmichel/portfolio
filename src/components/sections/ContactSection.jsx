import { Box, Heading } from '@chakra-ui/react';

const ContactSection = () => {
  return (
    <Box id="contact-section">
      <Heading
        height={'90vh'}
        p={4}
        m={6}
        borderWidth={4}
        borderColor={'gray.600'}
        fontSize={64}
      >
        # Contact Me
      </Heading>
    </Box>
  );
};
export default ContactSection;
