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
  const [render, setRender] = useState(false);
  // console.log(countries);
  useEffect(() => {
    try {
      setRender(false);
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
      // axios.get(All_CONTRIES_INFO).then(({ data }) => console.log(data));

      setRender(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
        {render && (
          <List>
            {countries.length > 0 &&
              countries.map(c => {
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

                return <Card key={c.name.common} {...countryInfo} />;
              })}
          </List>
        )}
      </Main>
    </>
  );
};
