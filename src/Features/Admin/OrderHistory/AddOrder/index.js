import React from 'react';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';

const addOrder = () => {
  const fields = [
    {
      type: 'select',
      label: 'Vendor',
      values: ['Yousuf', 'Dilawer'],
    },
    {
      type: 'multi-select',
      label: 'Menus',
      values: ['Karhai', 'Biryani', 'Salad'],
    },
    {
      type: 'price',
      label: 'Price',
      values: [],
    },
    {
      type: 'date',
      label: 'Date',
      values: [],
    },
  ];

  return <CommonGridBasedForm fields={fields} />;
};

export default addOrder;
