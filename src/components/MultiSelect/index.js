/* eslint-disable indent */
import React from 'react';

import { Checkbox, Input, ListItemText, MenuItem, Select } from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelect({ values, width, onChange, index, value }) {
  const [dataArray, setDataArray] = React.useState([]);
  const handleChange = (event) => {
    setDataArray(event.target.value);
    onChange(event, index);
  };

  return (
    <Select
      id="demo-mutiple-checkbox"
      input={<Input />}
      labelId="emo-simple-select-placeholder-label-label"
      MenuProps={MenuProps}
      multiple
      onChange={handleChange}
      renderValue={(selected) => selected.join(', ')}
      style={{ width }}
      value={value}
      variant="outlined"
    >
      {values
        ? values.map((value) => (
            <MenuItem key={value} value={value}>
              <Checkbox checked={dataArray.indexOf(value) > -1} />
              <ListItemText primary={value} />
            </MenuItem>
          ))
        : null}
    </Select>
  );
}
