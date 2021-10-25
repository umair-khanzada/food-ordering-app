import React, { Fragment, useEffect, useState } from 'react';

import { Grid, Input, Typography } from '@material-ui/core';

import MultipleSelect from '../MultiSelect';
import NumberInput from '../NumberInput';
import SelectTag from '../Select';
import TextField from '../TextField/TextField';
import AutoComplete from './autoComplete';
import { SELECT, MULTI_SELECT, DATE, PRICE, TEXT_FIELD, AUTO_COMPLETE } from './FieldTypes';
import { StyledMainContainerGrid, Error, StyledGridItem, StyledGridColumnItem, StyledFormButton } from './style';

const CommonGridBasedForm = ({ fields, buttons, responseError, heading }) => {
  const WIDTH = '100%';

  const [fieldsData, setFieldsData] = useState([fields]);

  useEffect(() => {
    setFieldsData(fields);
  }, [fields]);

  const getField = (field, props, index) => {
    switch (field) {
      case SELECT:
        return (
          <SelectTag index={index} onChange={props.onChange} value={props.value} values={props.values} width={WIDTH} />
        );
      case AUTO_COMPLETE:
        return (
          <AutoComplete
            index={index}
            label={props.label}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
            values={props.values}
            width={WIDTH}
          />
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
            disabled={props.disabled}
            type={props.textFieldType}
            value={props.value}
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
        <Typography color="primary" variant="h1">
          {heading}
          <hr />
        </Typography>
      </Grid>
      <StyledGridColumnItem item>
        <Grid container direction="row" spacing={3}>
          {fieldsData?.map((data, index) => {
            return (
              <Fragment key={index}>
                <StyledGridItem item lg={6} md={10} xs={12}>
                  <Typography color="secondary" variant="h4">
                    {data.label}
                  </Typography>
                  {getField(data.type, data, index)}

                  <Error>{data.errorMessage}</Error>
                </StyledGridItem>
              </Fragment>
            );
          })}
        </Grid>
        {buttons?.map(({ clickHandler, minWidth, name, type, color, isLoading, disableButton }, i) => (
          <div key={name + '-' + i}>
            <StyledFormButton
              key={name + '-' + i}
              color={color}
              disableButton={disableButton}
              fontSize="16px"
              loading={isLoading}
              minwidth={minWidth}
              onClick={clickHandler}
              property={name}
              type={type}
            />
          </div>
        ))}
      </StyledGridColumnItem>
      {responseError && <Error>{responseError}</Error>}
    </StyledMainContainerGrid>
  );
};
export default CommonGridBasedForm;
