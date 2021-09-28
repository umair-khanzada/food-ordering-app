import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { editUserById } from '../../Common Requests/mutation';
import { FetchUserById } from '../../Common Requests/request';

const EditVendor = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const { token } = useSelector((state) => {
    const {
      authReducer: {
        accessToken: { token },
      },
    } = state;
    return {
      token,
    };
  });
  const EditVendor = useMutation(editUserById, {
    onError: (error) => {
      console.log(`rolling back optimistic update with id `, error);
    },
    onSuccess: (data) => {
      console.log(`update with id`, data);
    },
  });
  const history = useHistory();

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
      type: SELECT,
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

  const { data: vendorById } = FetchUserById(id);

  useEffect(() => {
    if (vendorById !== undefined) {
      setVendor(vendorById);
      fields.map((field) => {
        field.value = vendorById[field.name];

        // if (field.label === 'Email') {
        //   console.log(vendorById[field.name]);
        //   field.value = vendorById.email;
        //   console.log('value', field.value);
        // } else if (field.label === 'Name') {
        //   console.log(vendorById[field.name]);
        //   field.value = vendorById.name;
        //   console.log('value', field.value);
        // } else if (field.label === 'Password') {
        //   console.log(vendorById[field.name]);
        //   field.value = vendorById.password;
        //   console.log('value', field.value);
        // }
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
      EditVendor.mutateAsync({ id, token, vendorData });
      setOnSaveSuccess(true);
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
