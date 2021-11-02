import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Country } from '../types';

interface Props {
  country: Country;
  onItemClick: (country: Country) => void;
}

interface ListContentProps {
  isActive: boolean;
}

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;

  @media (min-width: 420px) {
      flex 0 0 33.333%
      
  }
`;

const ListContent = styled.div<ListContentProps>`
  background-color: ${(props) => (props.isActive ? '#fff' : '#f3ebeb')};
  margin: 5px;
  padding: 10px 0;
`;

const CountryItem = ({ country, onItemClick }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickActive = (country: Country) => {
    onItemClick(country);
    setIsActive(!isActive);
  };

  return (
    <ListItem key={country.ID} onClick={() => handleClickActive(country)}>
      <ListContent isActive={isActive}>
        <h4>{country.Country} </h4>
        <div>New Confirmed: {country.NewConfirmed} </div>
        <div>New Deaths: {country.NewDeaths} </div>
        <div>New Recovered: {country.NewRecovered} </div>
      </ListContent>
    </ListItem>
  );
};

export default CountryItem;
