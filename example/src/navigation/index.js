import React from 'react';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.title}
        <li>Level 1</li>
        <li>Level 5</li>
        <li>Level 6</li>
      </ul>
    );
  }
}