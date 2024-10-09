import { Button, Flex, useColorMode, Checkbox } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ToggleThemeCheckbox() {
  const { colorMode, setColorMode } = useColorMode();

  const handleToggle = (mode) => {
    setColorMode(mode);
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Checkbox
        isChecked={colorMode === 'light'}
        onChange={() => handleToggle('light')}
        mr={4} // Add some space between the checkboxes
      >
        LIGHT
      </Checkbox>
      <Checkbox
        isChecked={colorMode === 'dark'}
        onChange={() => handleToggle('dark')}
      >
        DARK
      </Checkbox>
    </Flex>
  );
}
