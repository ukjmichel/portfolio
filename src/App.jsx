import './App.css';
import HomePages from './pages/HomePages';
import {Grid } from '@chakra-ui/react';

function App() {
  return (
    <Grid justifyContent={'center'}>
      <HomePages />
    </Grid>
  );
}

export default App;
