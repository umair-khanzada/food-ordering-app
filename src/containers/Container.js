import Container from '@material-ui/core/Container';
import React from 'react';

export default function SimpleContainer({ children, maxWidth }) {
  return (
    <>
      <Container maxWidth={maxWidth}>{children}</Container>
    </>
  );
}
