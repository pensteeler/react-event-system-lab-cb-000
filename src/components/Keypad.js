import React from 'react';

export default class Keypad extends React.Component {

  keypad = () => {
    console.log('Enter password.!');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.keypad} />
      </div>
    )
  }
}
