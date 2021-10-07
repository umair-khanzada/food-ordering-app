import React from 'react';

import './ErrorBoundary.css';
import { Grid, Typography } from '@material-ui/core';

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

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error.toString(), errorStack: errorInfo.componentStack });
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
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
                    <StyledBarSpan className="bar" />
                    <StyledBarSpan className="bar" />
                    <StyledBarSpan className="bar" />
                  </StyledDivColumn>
                </StyledDivColumn>
              </StyledDivRow>

              <StyledDivContent>
                <Typography variant="h4">{this.state.error}</Typography>
                <Typography variant="h4">{this.state.errorStack}</Typography>
              </StyledDivContent>
            </StyledDivContainer>
          </Grid>
          <Grid item xs={6}>
            <StyledImageTag
              alt="fallback"
              src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
            />
          </Grid>
        </Grid>
      );
    }

    return this.props.children;
  }
}
