import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import ToggleThemeBtn from './ToggleThemeBtn';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen); // Toggle the menu open state
  };

  return (
    <Flex justify={'space-between'} align={'center'} paddingX={6} paddingY={2}>
      <Text fontSize={32}>J-M Phyrum UK</Text>
      <Flex gap={4}>
        <ToggleThemeBtn />
        <IconButton
          aria-label="Open Menu"
          icon={<GiHamburgerMenu />}
          onClick={handleMenuClick}
          variant="outline"
          size="lg"
          border={'none'}
        />
      </Flex>

      {/* Optionally, add menu content here */}
      {isMenuOpen && (
        <Box
          position="absolute"
          top="60px"
          right={4}
          width={`calc(100vw - ${2 * 16}px)`} // Correct syntax for calc with Chakra UI (4 * 16 to convert to px)
          bg="gray.700"
          zIndex="1000"
          p={6}
          textAlign="right"
        >
          {/* Your menu items here */}
          <Box color="white">Menu Item 1</Box>
          <Box color="white">Menu Item 2</Box>
          <Box color="white">Menu Item 3</Box>
        </Box>
      )}
    </Flex>
  );
}
