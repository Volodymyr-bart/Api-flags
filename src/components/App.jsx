import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { ALL_COUNTRIES } from './config';
import { Controls } from './Controls/Controls';
import { Header } from './Header/Header';
import { List } from './List/List';
import { Main } from './Main/Main';

export const App = () => {
  const [countries, setCountries] = useState([]);
  // console.log(countries);
  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.length > 0 &&
            countries.map(c => {
              // console.log(c.name.common);
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population,
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };
              // return console.log(countryInfo);
              return <Card key={c.name.common} {...countryInfo} />;
            })}
        </List>
      </Main>
    </>
  );
};
