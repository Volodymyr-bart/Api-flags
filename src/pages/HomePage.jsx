import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { ALL_COUNTRIES } from 'components/config';
import { Controls } from 'components/Controls/Controls';
import { List } from 'components/List/List';

export const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [render, setRender] = useState(false);

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
    </>
  );
};
