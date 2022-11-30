import axios from 'axios';
import { useEffect, useState } from 'react';
import { ALL_COUNTRIES } from './config';
import { Controls } from './Controls/Controls';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

export const App = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);
  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
};
