/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
const AutoComplete = (props) => {
  const { values, onChange, index, value, options, placeholder } = props;

  console.log('values', value);

  const labelValue = value
    ? values.filter(({ id }) => {
        return id === value;
      })
    : '';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading

    // eslint-disable-next-line react/jsx-props-no-spreading

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={onChange}
      options={values}
      renderInput={(params) => <TextField {...params} label={placeholder} />}
      // eslint-disable-next-line react/jsx-props-no-spreading
      sx={{ width: 300 }}
      // eslint-disable-next-line react/jsx-props-no-spreading

      value={labelValue ? labelValue[0].label : labelValue}
    />
  );
};

export default AutoComplete;
