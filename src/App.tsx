import { Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardVariant } from './components/Card';
import { InputField } from './components/InputField';
import { PokeList } from './components/PokeList';
import { IPokeUrl } from './types/types';
import { Header } from './Header';

function App() {
  const [pokes, setPokes] = useState<IPokeUrl[]>();
  const [searchByName, setSearchByName] = useState<string>('');
  const [searchByType, setSearchByType] = useState<string[]>([]);



  const fetchPokes = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=1100&limit=18')
    // const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')

    setPokes(response.data.results)
  }

  useEffect(() => {
    fetchPokes()
  }, [])

  return (
    <Grid container sx={{ justifyContent: "center", width: "100%" }}>
      <Card width='100%' variant={CardVariant.outlined}>
        <Header />
        <InputField setSearchByName={setSearchByName} setSearchByType={setSearchByType} />
        <PokeList pokes={pokes} searchByName={searchByName} searchByType={searchByType} />
      </Card>

    </Grid >
  );
}

export default App;
