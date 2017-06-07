import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Navigation extends Component {
  static PropTypes = {
    dispatch: PropTypes.func,
  }
  handleOpen(index) {
    this.props.dispatch({ type: 'NAVIGATION_OPEN_PAGE', page: `home${index}`});
  }
  renderList = () => [1,2,3,4]
    .map((element, index)=> (
        <li onClick={() => { this.handleOpen(index); }} key={element}>
          <a href="#">Level {element}</a>
        </li>
      ),
    );
  render() {
    console.log(this.renderList());
    return (
      <ul>
        {this.props.title}
        {this.renderList()}
      </ul>
    );
  }
}

export default connect(null, null)(Navigation);