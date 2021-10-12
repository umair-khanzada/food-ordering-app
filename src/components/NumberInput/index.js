/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Input from '@material-ui/core/Input';

export default function NumberInput(props) {
  let { value } = props;

  const setInputNumberValue = (inputNumberValue) => {
    value = inputNumberValue;
  };

  const handleBlur = () => {
    if (value < 0) {
      setInputNumberValue(0);
    } else if (value > 100) {
      setInputNumberValue(100);
    }
  };

  return (
    <Input
      inputProps={{
        step: 1,
        min: 1,
        max: 999999,
        type: 'number',
      }}
      onBlur={handleBlur}
      {...props}
      fullWidth
      value={value}
    />
  );
}
