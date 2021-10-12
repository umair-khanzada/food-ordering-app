import React from 'react';

import './ErrorBoundary.css';
import { Grid, Typography } from '@material-ui/core';

import fallbackGIF from '../../assets/something-went-wrong.gif';
import {
  StyledBarSpan,
  StyledDivColumn,
  StyledDivContainer,
  StyledDivContent,
  StyledDivRow,
  StyledDotSpan,
  StyledImageTag,
  StyledInputText,
} from './style';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '', errorStack: '' };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error.toString(), errorStack: errorInfo.componentStack });
    // You can also log the error to an error reporting service
  }

  render() {
    const { hasError, error, errorStack } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Grid container direction="row" spacing={3}>
          <Grid item style={{ padding: '50px' }} xs={6}>
            <StyledDivContainer>
              <StyledDivRow>
                <StyledDivColumn float="left" width="15%">
                  <StyledDotSpan background="#ED594A" />
                  <StyledDotSpan background="#FDD800" />
                  <StyledDotSpan background="#5AC05A" />
                </StyledDivColumn>
                <StyledDivColumn float="left" width="75%">
                  <StyledInputText defaultValue="http://www.nisum-foa.com" type="text" />
                </StyledDivColumn>
                <StyledDivColumn float="left" width="10%">
                  <StyledDivColumn float="right">
                    <StyledBarSpan />
                    <StyledBarSpan />
                    <StyledBarSpan />
                  </StyledDivColumn>
                </StyledDivColumn>
              </StyledDivRow>

              <StyledDivContent>
                <Typography variant="h4">{error}</Typography>
                <Typography variant="h4">{errorStack}</Typography>
              </StyledDivContent>
            </StyledDivContainer>
          </Grid>
          <Grid item xs={6}>
            <StyledImageTag alt="fallback" src={fallbackGIF} />
          </Grid>
        </Grid>
      );
    }

    return children;
  }
}
