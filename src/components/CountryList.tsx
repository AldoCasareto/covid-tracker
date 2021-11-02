import React from 'react';
import { Country } from '../types';
import styled from '@emotion/styled';
import CountryItem from './CountryItem';

interface CountryProps {
  countries: Country[];
  onItemClick: (country: Country) => void;
}

const ListWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

const CountryList = ({ countries, onItemClick }: CountryProps) => {
  return (
    <div>
      <ListWrapper>
        {countries.map((country) => (
          <CountryItem country={country} onItemClick={onItemClick} />
        ))}
      </ListWrapper>
    </div>
  );
};

export default CountryList;
