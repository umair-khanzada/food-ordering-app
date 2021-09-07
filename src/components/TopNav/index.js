import React from 'react';

import { useTheme } from '@material-ui/core/styles';

import * as S from './styles';

function TopNav() {
  const theme = useTheme();
  return (
    <S.TopNav maxWidth={false} theme={theme}>
      <S.NavText align="center" theme={theme} variant="h3">
        Food Order System
      </S.NavText>
    </S.TopNav>
  );
}

export default TopNav;
