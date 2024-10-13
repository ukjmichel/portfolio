import { Box, Flex, IconButton, Text, Stack } from '@chakra-ui/react';
import ToggleThemeBtn from './ToggleThemeBtn';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState); // Toggle the menu open state
  };

  return (
    <Flex
      justify={'space-between'}
      align={'center'}
      paddingX={6}
      paddingY={2}
      borderBottom={'1px'}
      borderColor={'gray.400'}
      position="relative" // Ensure that the dropdown is positioned correctly
    >
      <IconButton
        aria-label="Open Menu"
        icon={<GiHamburgerMenu />}
        onClick={handleMenuClick}
        variant="outline"
        size="lg"
        border={'none'}
      />
      <ToggleThemeBtn />

      {/* Optionally, add menu content here */}
      {isMenuOpen && (
        <Box
          position="absolute"
          top="60px"
          left="0" // Align the menu to the left
          maxWidth={'200px'} // Set a fixed width for the dropdown
          bg="gray.700"
          zIndex="1000"
          p={4}
          borderRadius="md" // Optional: adds rounded corners
        >
          {/* Your menu items here */}
          <Stack spacing={2} textAlign="left">
            {' '}
            {/* Align text to the left */}
            <Text
              color="white"
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
            >
              Menu Item 1
            </Text>
            <Text
              color="white"
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
            >
              Menu Item 2
            </Text>
            <Text
              color="white"
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
            >
              Menu Item 3
            </Text>
          </Stack>
        </Box>
      )}
    </Flex>
  );
}
