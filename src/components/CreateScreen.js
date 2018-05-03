import React, { Component } from 'react';
import AddPersonalDetails from './AddPersonalDetails';

class CreateScreen extends Component {
  render() {
    return (
      <div>
        <h1>Build your resume</h1>
        <AddPersonalDetails />
      </div>
    );
  }
}

export default CreateScreen;
