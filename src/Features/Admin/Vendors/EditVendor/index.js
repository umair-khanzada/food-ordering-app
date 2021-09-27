import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { MULTI_SELECT, SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { FetchUserById } from '../../Common Requests/request';
import { updateVendorById } from '../actions';

const EditVendor = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Role',
      values: ['user', 'vendor'],
      value: [],
      errorMessage: '',
      name: 'role',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'email',
      label: 'Email',
      variant: 'standard',
      value: '',
      name: 'email',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!emailRegex.test(value)) {
          return 'Email type is not valid';
        }
        return '';
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Name',
      variant: 'standard',
      value: '',
      name: 'name',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'password',
      label: 'Password',
      variant: 'standard',
      value: '',
      name: 'password',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (value.length < 8) {
          return 'Password must be 8 characters long';
        }
        return '';
      },
    },

    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Contact',
      variant: 'standard',
      value: '',
      name: 'contact',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!contactRegex.test(value)) {
          return 'Contact length or Type is not valid';
        }
        return '';
      },
    },
    {
      type: MULTI_SELECT,
      label: 'Building',
      values: ['Main', 'Cherry', 'Qasre Sheeren'],
      value: [],
      variant: 'standard',

      name: 'building',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
  ]);
  const [vendor, setVendor] = useState('');

  const vendorById = FetchUserById(id);

  useEffect(() => {
    if (vendorById !== undefined) {
      setVendor(vendorById);
      fields.map((field) => {
        if (field.label === 'Email') {
          field.value = vendorById.email;
        } else if (field.label === 'Name') {
          field.value = vendorById.name;
        } else if (field.label === 'Password') {
          field.value = vendorById.password;
        }
      });
      setFields(fields);
    }
  }, [vendorById]);
  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);

    if (isValid) {
      const vendorData = {};
      fields.map(({ name, value }) => {
        if (name !== 'building' && name !== 'contact' && name !== 'role') {
          vendorData[name] = value;
        }
      });
      dispatch(
        updateVendorById({
          id,
          vendorData,
        }),
      );

      setOnSaveSuccess(true);
      history.push('/vendors');
    } else {
      setOnSaveSuccess(false);
    }
  };

  const buttons = {
    button: [
      {
        type: 'button',
        name: 'save',
        minWidth: '100%',
        clickHandler: saveHandler,
      },
    ],
  };

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Vendor" onSaveSuccess={onSaveSuccess} />;
};

export default EditVendor;
