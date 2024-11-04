import {
  Box,
  chakra,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const SocialButton = ({ label = '', href = '', children }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function FooterSection() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
      boxShadow="lg"
    >
      <Flex
        as={Stack}
        p={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={'space-between'}
        align={'center'}
      >
        <Text>© 2024 J-M Phirum Uk. All rights reserved</Text>

        <Stack direction={'row'}>
          <SocialButton label={'GitHub'} href={'https://github.com/ukjmichel'}>
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/jean-michel-uk-99479812a/'}
          >
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Flex>
    </Box>
  );
}
