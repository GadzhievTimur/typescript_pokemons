import { Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardVariant } from './components/Card';
import { InputField } from './components/InputField';
import { PokeList } from './components/PokeList';
import { IPoke, IPokeFetch } from './components/types/types';
import { Header } from './Header';

function App() {
  const [pokes, setPokes] = useState<IPokeFetch>();



  const fetchPokes = async () => {
    const response = await axios.get<IPokeFetch>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=11')
    setPokes(response.data)
  }
  useEffect(() => {
    fetchPokes()
  }, [])

  return (
    <Grid container sx={{ justifyContent: "center", width: "100%" }}>
      <Card width='100%' variant={CardVariant.outlined}>
        <Header />
        <InputField />
      </Card>
      <PokeList pokes={pokes && pokes} />
    </Grid >
  );
}

export default App;
