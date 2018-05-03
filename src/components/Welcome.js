import React, { Component, Fragment } from 'react';

class Welcome extends Component {

  myName = React.createRef();

  startBuildingResume = e => {
    e.preventDefault();
    const userName = this.myName.current.value;
    this.props.history.push(`/resume/${userName}`)
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.startBuildingResume}>
        <h2>Please Enter Your Name</h2>
        <input 
          type="text"
          ref={this.myName}
          required
          placeholder="Your name"
        />
        <button type="submit">Start Building!</button>
        </form>
      </Fragment>
    );
  }
}

export default Welcome;
