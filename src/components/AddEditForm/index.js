/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
import React, { Fragment } from 'react';

import { Grid, Input, Typography } from '@material-ui/core';

import Button from '../Button/Button';
import MultipleSelect from '../MultiSelect';
import NumberInput from '../NumberInput';
import SelectTag from '../Select';
import TextField from '../TextField/TextField';
import { SELECT, MULTI_SELECT, DATE, PRICE, TEXT_FIELD } from './FieldTypes';
import { StyledMainContainerGrid, Error } from './style';

const AddEditForm = ({ fields, buttons, responseError, heading }) => {
  const WIDTH = '100%';

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

      case TEXT_FIELD:
        return (
          <TextField
            changeHandler={(e) => props.onChange(e, index)}
            type={props.textFieldType}
            variant={props.variant}
            width={WIDTH}
          />
        );

      default:
        return null;
    }
  };

  return (
    <StyledMainContainerGrid container direction="column">
      <Grid item>
        <Typography color="secondary" variant="h1">
          {heading}
          <hr />
        </Typography>
      </Grid>
      <Grid item style={{ width: '50%', marginTop: '30px' }}>
        {fields
          ? fields.map((data, index) => {
              return (
                <Fragment key={index}>
                  <Grid item style={{ marginBottom: '50px' }} xs={12}>
                    <Typography style={{ color: '#717271' }} variant="h4">
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
        {buttons
          ? buttons.button.map(({ clickHandler, minWidth, name, type }, i) => (
              <div key={name + '-' + i}>
                <Button
                  key={name + '-' + i}
                  fontSize="16px"
                  minwidth={minWidth}
                  onClick={clickHandler}
                  property={name}
                  style={{ padding: '10px 100px' }}
                  type={type}
                />
              </div>
            ))
          : null}
      </Grid>
    </StyledMainContainerGrid>
  );
};
export default AddEditForm;
