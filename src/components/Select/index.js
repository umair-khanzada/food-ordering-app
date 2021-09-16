import React from 'react';

import { Select, MenuItem } from '@material-ui/core';

const SelectTag = ({ values, width }) => {
  const [data, setData] = React.useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <Select onChange={handleChange} style={{ width }} value={data}>
      {values.map((value, index) => (
        <MenuItem key={index} value={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectTag;
