import React from 'react';

import { Grid, InputAdornment, TextField } from '@material-ui/core';

import CommonButton from '../../../../components/Button/Button';
import { FormContainer, Form, FormHeading, CreateIconButton, GridContainer } from '../style';

function EditCategories() {
  return (
    <FormContainer>
      <GridContainer alignItems="center" container item justifyContent="center">
        <Grid md={4} xs={12}>
          <Form autoComplete="off" noValidate>
            <FormHeading>Edit Category</FormHeading>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <CreateIconButton />
                  </InputAdornment>
                ),
              }}
              label="Categories"
              style={{ margin: '20px' }}
            />
            <div>
              <CommonButton property="Edit Category" />
            </div>
          </Form>
        </Grid>
      </GridContainer>
    </FormContainer>
  );
}

export default EditCategories;
