import { useState } from 'react';
import './App.css';
import HomePages from './pages/HomePages';
import { Box, Center } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <HomePages />
    </Box>
  );
}

export default App;
