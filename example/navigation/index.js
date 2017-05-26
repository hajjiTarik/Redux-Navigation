import React from 'react';

export default class Navigation extends React.Component {
  renderList = () => [1,2,3,4].map((el)=>(<li key={el}>Level {el}</li>));
  render() {
    return (
      <ul>
        {this.props.title}
        {this.renderList()}
      </ul>
    );
  }
}