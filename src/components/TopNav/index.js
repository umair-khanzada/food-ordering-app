import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import * as S from './styles';

function TopNav() {
    const theme = useTheme();
    return (
        <S.TopNav theme={theme} maxWidth={false} >
            <S.NavText variant="h3" align="center" theme={theme}>
                Food Order System
            </S.NavText>    
        </S.TopNav>
    );
}

export default TopNav
