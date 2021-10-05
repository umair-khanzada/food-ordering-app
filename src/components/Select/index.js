/* eslint-disable indent */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Select, MenuItem } from '@material-ui/core';

const SelectTag = (props) => {
  const { values, onChange, index, value } = props;

  return (
    <Select {...props} fullWidth onChange={(e) => onChange(e, index)} value={value}>
      {values?.map((name, index) => (
        <MenuItem key={index} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectTag;
