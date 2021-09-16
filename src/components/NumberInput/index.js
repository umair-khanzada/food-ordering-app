import React from 'react';

import Input from '@material-ui/core/Input';

export default function NumberInput({ width }) {
  const [value, setValue] = React.useState(30);

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

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
      onChange={handleInputChange}
      style={{ width }}
      value={value}
    />
  );
}
