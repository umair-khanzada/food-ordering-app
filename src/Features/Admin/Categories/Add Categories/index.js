import React from 'react';

import { Grid, TextField } from '@material-ui/core';

import CommonButton from '../../../../components/Button/Button';
import { FormContainer, Form, FormHeading, GridContainer } from '../style';

function AddCategories() {
  return (
    <FormContainer>
      <GridContainer alignItems="center" container item justifyContent="center">
        <Grid md={4} xs={12}>
          <Form autoComplete="off" noValidate>
            <FormHeading>Add Category</FormHeading>
            <TextField label="Categories" style={{ margin: '20px' }} />
            <CommonButton property="Add Categories" />
          </Form>
        </Grid>
      </GridContainer>
    </FormContainer>
  );
}

export default AddCategories;
