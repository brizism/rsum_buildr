import React, { Component } from 'react';
import CreateScreen from './CreateScreen';

class App extends Component {
  state = {
    resumeCopy: {}
  }


  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>Hi {params.resumeId}!</h1>
        <CreateScreen />
      </div>
    );
  }
}

export default App;
