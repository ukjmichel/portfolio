import './App.css';
import HomePages from './pages/HomePages';
import { Box, Grid } from '@chakra-ui/react';

function App() {
  return (
    <Grid justifyContent={'center'}>
      <HomePages />
    </Grid>
  );
}

export default App;
