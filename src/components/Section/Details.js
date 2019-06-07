import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin: 0.5rem 0;
`;

const Details = ({
  index,
  statusValue,
  forecastValue,
  progressValue,
  setStatus,
  setForecast,
  setProgress
}) => {
  return (
    <>
      <Input
        type="text"
        value={statusValue}
        onChange={e => {
          setStatus(index, e.target.value);
        }}
        placeholder="Status"
      />
      <Input
        type="text"
        value={forecastValue}
        onChange={e => {
          setForecast(index, e.target.value);
        }}
        placeholder="Forecast"
      />
      <Input
        type="text"
        value={progressValue}
        onChange={e => {
          setProgress(index, e.target.value);
        }}
        placeholder="Progress"
      />
    </>
  );
};

export default Details;
