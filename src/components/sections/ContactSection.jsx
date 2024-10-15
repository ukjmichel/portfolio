import {
  Box,
  Heading,
  Stack,
  Text,
  Link,
  Button,
  Icon,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useColorModeValue,
  useColorMode, // Import useColorMode
  IconButton,
} from '@chakra-ui/react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaSun,
  FaMoon,
} from 'react-icons/fa';

const ContactSection = () => {
  // Using useColorMode to toggle between light and dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      id="contact"
      p={10}
      bg={useColorModeValue('gray.100', 'gray.800')}
      boxShadow="lg"
      mx="auto"
    >
      <Heading
        as="h2"
        size="2xl"
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
        "N'hésitez pas à m'envoyer un email ou à me contacter sur LinkedIn et
        GitHub !"
      </Text>

      {/* Grid Layout */}
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }} // 1 column on base, 2 columns on md
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

        {/* Right Section: Contact Form */}
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          p={6}
          borderRadius="lg"
          boxShadow="md"
        >
          <form>
            <VStack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel color={useColorModeValue('gray.800', 'white')}>
                  Email
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  size="lg"
                  variant="filled"
                  bg={useColorModeValue('white', 'gray.600')}
                  color={useColorModeValue('gray.800', 'white')}
                />
              </FormControl>

              <FormControl id="message" isRequired>
                <FormLabel color={useColorModeValue('gray.800', 'white')}>
                  Message
                </FormLabel>
                <Textarea
                  placeholder="Enter your message"
                  size="lg"
                  variant="filled"
                  bg={useColorModeValue('white', 'gray.600')}
                  color={useColorModeValue('gray.800', 'white')}
                />
              </FormControl>

              <Button colorScheme="blue" size="lg" type="submit" w="full">
                Envoyer Message
              </Button>
            </VStack>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default ContactSection;
