import styled from '@emotion/styled';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Country } from '../types';

interface Props {
  countries: Country[];
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BarWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const BarChart = ({ countries }: Props) => {
  const generateChartData = () => {
    const data: number[] = [];
    const labels: string[] = [];

    countries.forEach((country) => {
      data.push(country.NewConfirmed);
      labels.push(country.Country);
    });
    return {
      labels,
      datasets: [
        {
          label: '# of new Cases',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  };
  return (
    <BarWrapper>
      <Bar data={generateChartData()} options={options} />
    </BarWrapper>
  );
};

export default BarChart;
