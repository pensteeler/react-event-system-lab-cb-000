import React from 'react';

export default class Keypad extends React.Component {

  keypad = () => {
    console.log('Enter password.!');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.keypad} />
    )
  }
}

export default Keypad;