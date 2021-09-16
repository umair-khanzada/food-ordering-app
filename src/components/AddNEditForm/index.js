/* eslint-disable indent */
import React from 'react';

import { Grid, Input, Typography } from '@material-ui/core';

import Button from '../Button/Button';
import MultipleSelect from '../MultiSelect';
import NumberInput from '../NumberInput';
import SelectTag from '../Select';
import { StyledMainContainerGrid } from './style';

const AddNEditForm = ({ fields }) => {
  const WIDTH = '50%';

  const getField = (field, values) => {
    switch (field) {
      case 'select':
        return <SelectTag values={values} width={WIDTH} />;

      case 'multi-select':
        return <MultipleSelect data={values} width={WIDTH} />;

      case 'date':
        return <Input style={{ width: WIDTH }} type="date" />;

      case 'price':
        return <NumberInput width={WIDTH} />;

      default:
        return null;
    }
  };

  return (
    <StyledMainContainerGrid container direction="column" spacing={3}>
      <Grid item>
        <Typography color="primary" variant="h1">
          Add Order
        </Typography>
      </Grid>
      <Grid item>
        <hr />
      </Grid>
      <Grid item>
        <Grid container direction="row" justifyContent="flex-start">
          {fields
            ? fields.map((data, index) => {
                return (
                  <>
                    <Grid key={index} item style={{ marginBottom: '15px' }} xs={4}>
                      <Typography color="secondary" variant="h4">
                        {data.label}
                      </Typography>
                      {getField(data.type, data.values)}
                    </Grid>
                  </>
                );
              })
            : null}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container justifyContent="flex-start">
          <Button property="save" />
        </Grid>
      </Grid>
    </StyledMainContainerGrid>
  );
};
export default AddNEditForm;
