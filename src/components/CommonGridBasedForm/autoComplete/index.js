/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
const AutoComplete = (props) => {
  const { values, onChange, index, value, options, placeholder } = props;

  const labelValue = value
    ? values.find(({ id }) => {
        return id === value;
      })
    : '';

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={onChange}
      options={values}
      renderInput={(params) => <TextField {...params} label={placeholder} />}
      sx={{ width: 300 }}
      value={labelValue ? labelValue.label : labelValue}
    />
  );
};

export default AutoComplete;
