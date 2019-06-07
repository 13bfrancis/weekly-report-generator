import React from 'react';

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
      <input
        type="text"
        value={statusValue}
        onChange={e => {
          setStatus(index, e.target.value);
        }}
        placeholder="Status"
      />
      <input
        type="text"
        value={forecastValue}
        onChange={e => {
          setForecast(index, e.target.value);
        }}
        placeholder="Forecast"
      />
      <input
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
