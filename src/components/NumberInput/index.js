/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Input from '@material-ui/core/Input';

export default function NumberInput(props) {
  const { value, setValue } = props;

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
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
      value={value}
    />
  );
}
