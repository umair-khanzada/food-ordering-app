import React from 'react';

import AddNEditForm from '../../../../components/AddNEditForm';

const AddOrder = () => {
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

  return <AddNEditForm fields={fields} />;
};

export default AddOrder;
