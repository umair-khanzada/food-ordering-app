/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
import React, { Fragment } from 'react';

import { Grid, Input, Typography } from '@material-ui/core';

import Button from '../Button/Button';
import MultipleSelect from '../MultiSelect';
import NumberInput from '../NumberInput';
import SelectTag from '../Select';
import { SELECT, MULTI_SELECT, DATE, PRICE } from './FieldTypes';
import { StyledMainContainerGrid, Error } from './style';

const AddEditForm = ({ fields, buttons, responseError, onSaveSuccess }) => {
  const WIDTH = '50%';

  const getField = (field, props, index) => {
    switch (field) {
      case SELECT:
        return (
          <SelectTag index={index} onChange={props.onChange} value={props.value} values={props.values} width={WIDTH} />
        );

      case MULTI_SELECT:
        return (
          <MultipleSelect
            dataArray={props.dataArray}
            index={index}
            onChange={props.onChange}
            value={props.value}
            values={props.values}
            width={WIDTH}
          />
        );

      case DATE:
        return (
          <Input onChange={(e) => props.onChange(e, index)} style={{ width: WIDTH }} type="date" value={props.value} />
        );

      case PRICE:
        return <NumberInput onChange={(e) => props.onChange(e, index)} value={props.value} width={WIDTH} />;

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
                  <Fragment key={index}>
                    <Grid item style={{ marginBottom: '15px' }} xs={4}>
                      <Typography color="secondary" variant="h4">
                        {data.label}
                      </Typography>
                      {getField(data.type, data, index)}
                      <br />
                      <Error style={{ justifyContent: 'top' }}>{data.errorMessage}</Error>
                    </Grid>
                  </Fragment>
                );
              })
            : null}
        </Grid>
      </Grid>
      <Grid item>
        <hr />
      </Grid>
      <Grid item xs={4}>
        <Grid container justifyContent="flex-start">
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
        <Error>{onSaveSuccess && 'Save Successful!'}</Error>
      </Grid>
    </StyledMainContainerGrid>
  );
};
export default AddEditForm;
