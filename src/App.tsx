import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalInfo from './components/GlobalInfo';
import { ResponseData, Country } from './types';
import CountryList from './components/CountryList';
import { Global, css } from '@emotion/react';
import BarChart from './components/BarChart';

function App() {
  const [countryData, setCountryData] = useState<ResponseData | undefined>(
    undefined
  );
  const [activeCountry, setActiveCountry] = useState<Country[]>([]);

  const url = ' https://api.covid19api.com/summary';
  const fetchData = async () => {
    await axios.get(url).then((res) => {
      setCountryData(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCountryClick = (country: Country) => {
    const matchIndex = activeCountry.findIndex(
      (aCountry) => aCountry.ID === country.ID
    );

    if (matchIndex > -1) {
      const newActive = [...activeCountry];
      newActive.splice(matchIndex, 1);

      setActiveCountry(newActive);
    } else {
      setActiveCountry([...activeCountry, country]);
    }
  };

  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: #d1cbcb;
            color: #783c3c;
          }
        `}
      />
      {activeCountry.map((aCountry) => (
        <span>{aCountry.Country}</span>
      ))}
      {countryData ? (
        <>
          <GlobalInfo
            newConfirmed={countryData?.Global.NewConfirmed}
            newDeaths={countryData?.Global.NewDeaths}
            newRecovered={countryData?.Global.NewRecovered}
          />
          <hr />
          {activeCountry.length ? <BarChart countries={activeCountry} /> : null}

          <CountryList
            countries={countryData.Countries}
            onItemClick={handleCountryClick}
          />
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default App;
