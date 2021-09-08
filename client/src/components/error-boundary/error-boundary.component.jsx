import React from 'react';

import Dog from '../../assets/Dog_Ate-big.png';

import { 
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
 } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(error) {
      return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={ Dog }></ErrorImageContainer>
          <ErrorImageText>404: Entschuldigung, aber mein Hund hat wohl die Seite gefressen.</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;