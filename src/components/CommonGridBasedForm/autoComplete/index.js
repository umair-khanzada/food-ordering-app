import React from 'react';

import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
const AutoComplete = (props) => {
  const { values, onChange, index, value, options, label, placeholder } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading

    // eslint-disable-next-line react/jsx-props-no-spreading

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={onChange}
      options={values}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} label={placeholder} />}
      sx={{ width: 300 }}
    />
  );
};

export default AutoComplete;
