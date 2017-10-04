import React from 'react';

export default class Keypad extends React.Component {

  constructor() {
    super();
  }
  
  keypad = () => {
    console.log('Enter password.!');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.keypad}/>
    );
  }
}