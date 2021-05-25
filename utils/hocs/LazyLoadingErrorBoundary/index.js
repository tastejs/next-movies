

import React, { Component } from 'react';

/*** Adapted from https://reactjs.org/docs/error-boundaries.html ***/
class LazyLoadingErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    console.log('[LazyLoadingErrorBoundary getDerivedStateFromError] error => ', error);
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '64px 0',
            textAlign: 'center'
          }}>
          <button onClick={() => window.location.reload()}>Click to Reload</button>
          <p
            style={{
              textAlign: 'center',
              padding: '12px 0'
            }}>
            Lazy-loading failed!
          </p>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default LazyLoadingErrorBoundary;
