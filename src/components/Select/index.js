import React from 'react';

import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

const SelectTag = ({ values, width, placeholder }) => {
  const [data, setData] = React.useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <InputLabel id="demo-controlled-open-select-label">{placeholder}</InputLabel>
      <Select labelId="demo-controlled-open-select-label" onChange={handleChange} style={{ width }}>
        {values.map((value, index) => (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTag;
