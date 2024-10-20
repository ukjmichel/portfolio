import { Flex, useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ToggleThemeSwitch() {
  const { colorMode, setColorMode } = useColorMode();

  const handleToggle = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      onClick={handleToggle}
      fontSize={{ base: '30px' }} // Adjust the icon size
      bg="transparent"
      color={colorMode === 'light' ? 'black' : 'white'} // Icon color based on theme
      _hover={{ bg: 'transparent' }} // Prevent background on hover
    />
  );
}
