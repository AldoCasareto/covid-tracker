import styled from '@emotion/styled';
import React from 'react';

interface SummaryProps {
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
}

const Wrapper = styled.div`
  text-align: center;
`;

const GlobalInfo = ({
  newConfirmed,
  newDeaths,
  newRecovered,
}: SummaryProps) => {
  const formatNumber = (format: number) => {
    return new Intl.NumberFormat().format(format);
  };

  return (
    <Wrapper>
      <h1>Global Covid Cases</h1>
      <h3>New Confirmed: {formatNumber(newConfirmed)}</h3>
      <h3>New Deaths: {formatNumber(newDeaths)}</h3>
      <h3>New Recovered: {formatNumber(newRecovered)}</h3>
    </Wrapper>
  );
};

export default GlobalInfo;
