/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
import React from 'react';

import { Grid, Input, Typography } from '@material-ui/core';

import Button from '../Button/Button';
import MultipleSelect from '../MultiSelect';
import NumberInput from '../NumberInput';
import SelectTag from '../Select';
import { SELECT, MULTI_SELECT, DATE, PRICE } from './FieldTypes';
import { StyledMainContainerGrid, Error } from './style';

const AddEditForm = ({ fields, buttons, responseError }) => {
  const WIDTH = '50%';

  const getField = (field, props) => {
    switch (field) {
      case SELECT:
        return <SelectTag onChange={props.onChange} values={props.values} width={WIDTH} />;

      case MULTI_SELECT:
        return (
          <MultipleSelect dataArray={props.dataArray} onChange={props.onChange} values={props.values} width={WIDTH} />
        );

      case DATE:
        return <Input onChange={props.onChange} style={{ width: WIDTH }} type="date" />;

      case PRICE:
        return <NumberInput onChange={props.onChange} width={WIDTH} />;

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
                      {getField(data.type, data)}
                      <br />
                      <Error style={{ justifyContent: 'top' }}>{data.errorMessage}</Error>
                    </Grid>
                  </>
                );
              })
            : null}
        </Grid>
      </Grid>
      <Grid item>
        <hr />
      </Grid>
      <Grid item xs={4}>
        <Grid container justifyContent="flex-end">
          {buttons
            ? buttons.button.map(({ clickHandler, minWidth, name, type }, i) => (
                <div key={name + '-' + i}>
                  <Button
                    key={name + '-' + i}
                    fontSize="16px"
                    minwidth={minWidth}
                    onClick={clickHandler}
                    property={name}
                    type={type}
                  />
                </div>
              ))
            : null}
        </Grid>
        <Error>{responseError}</Error>
      </Grid>
    </StyledMainContainerGrid>
  );
};
export default AddEditForm;
