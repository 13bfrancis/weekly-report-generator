import React from 'react';

const TextField = ({ maxLength, fieldName, value = '', setValue }) => {
  return (
    <>
      <input type="text" name={fieldName} value={value} />
    </>
  );
};
