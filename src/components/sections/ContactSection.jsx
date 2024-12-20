import {
  Box,
  Heading,
  Text,
  Link,
  Button,
  Icon,
  Grid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <Box
      id="contact-section"
      p={10}
      bg={useColorModeValue('gray.100', 'gray.800')}
      boxShadow={useColorModeValue('lg', 'none')}
      mx="auto"
    >
      <Heading
        as="h2"
        size="xl"
        mb={6}
        textAlign="center"
        color={useColorModeValue('gray.800', 'white')}
      >
        Me contacter
      </Heading>
      <Text
        fontSize="lg"
        mb={4}
        textAlign="center"
        color={useColorModeValue('gray.600', 'gray.300')}
      >
        N&apos;hésitez pas à m&apos;envoyer un email ou à me contacter sur
        LinkedIn et GitHub !
      </Text>

      {/* Grid Layout */}
      <Grid
        templateColumns={{ base: '1fr' }} // 1 column on base, 2 columns on md
        gap={10} // Space between grid items
      >
        {/* Left Section: Email, LinkedIn, and GitHub */}
        <VStack spacing={4} align="center" mt={10}>
          <Link href="mailto:jmichel.uk@outlook.fr" isExternal>
            <Button
              bg="blue.600" // Background color for the email button
              color="white" // Text color
              size="lg"
              w="250px" // Fixed width for the button
              leftIcon={<Icon as={FaEnvelope} />} // Email icon
            >
              jmichel.uk@outlook.fr
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jean-michel-uk-99479812a/"
            isExternal
          >
            <Button
              colorScheme="blue"
              leftIcon={<Icon as={FaLinkedin} />}
              size="lg"
              w="250px"
            >
              Connect on LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/ukjmichel" isExternal>
            <Button
              bg="black" // Set the background color to black
              color="white" // Set text color to white for better visibility
              _hover={{ bg: 'gray.700' }} // Change background color on hover
              leftIcon={<Icon as={FaGithub} />}
              size="lg"
              w="250px" // Fixed width for the button
            >
              Check my GitHub
            </Button>
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
};

export default ContactSection;
