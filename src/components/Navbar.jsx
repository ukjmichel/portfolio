import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import ToggleThemeBtn from './ToggleThemeBtn';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior

    const section = document.getElementById(sectionId);
    if (section) {
      // Smooth scrolling to the section
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Close the drawer after scrolling
      setTimeout(() => {
        onClose(); // Close the drawer
      }, 500); // Set a delay for drawer close
    } else {
      console.warn(`Section with ID "${sectionId}" not found.`);
    }
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      borderBottom="1px"
      borderColor="gray.400"
      height={{
        base: '60px',
        md: '80px',
      }}
      px={8}
    >
      {/* Hamburger menu button */}
      <IconButton
        aria-label="Open Menu"
        icon={<GiHamburgerMenu />}
        variant="outline"
        fontSize={{ base: '30px', md: '40px' }}
        border="none"
        onClick={onOpen} // Open the drawer on hamburger click
      />

      {/* Theme toggle button */}
      <ToggleThemeBtn
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
          // Add theme toggle functionality here if needed
        }}
      />

      {/* Drawer (sidebar) for all screens */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column" gap="20px" fontSize={{ base: '24px' }}>
              <Link
                href="#about-section"
                onClick={(e) => handleScrollToSection(e, 'about-section')}
                cursor="pointer"
              >
                A PROPOS
              </Link>
              <Link
                href="#skills-section"
                onClick={(e) => handleScrollToSection(e, 'skills-section')}
                cursor="pointer"
              >
                COMPETENCE
              </Link>
              <Link
                href="#projects-section"
                onClick={(e) => handleScrollToSection(e, 'projects-section')}
                cursor="pointer"
              >
                PROJETS
              </Link>
              <Link
                href="#contact-section"
                onClick={(e) => handleScrollToSection(e, 'contact-section')}
                cursor="pointer"
              >
                CONTACT
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
