import React, { Component, Fragment } from 'react';
import TextField from 'material-ui/TextField';
import CustomButton from './CustomButton';

class Welcome extends Component {
  
  startBuildingResume = e => {
    e.preventDefault();
    const userName = e.target.elements[0].value
    this.props.history.push(`/resume/${userName}`)
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.startBuildingResume}>
        <h2>Please Enter Your Name</h2>
        <TextField
          placeholder="Your name"
          required
        />
      <CustomButton>Bris</CustomButton>
        <button type="submit">Start Building!</button>
        </form>
      </Fragment>
    );
  }
}

export default Welcome;
