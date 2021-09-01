import React from 'react';

import Container from '@material-ui/core/Container';

export default function SimpleContainer({ children, maxWidth }) {
  return (
    <>
      <Container maxWidth={maxWidth}>{children}</Container>
    </>
  );
}
