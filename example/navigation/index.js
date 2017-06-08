import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openPage, closePage } from '../../src/redux/actions';

class Navigation extends Component {
  static PropTypes = {
    dispatch: PropTypes.func,
  }

  renderList = () => [1,2,3,4]
    .map((element, index)=> (
      <li key={element}>
        <a onClick={() => { this.props.openPage({ pageId: `home${index}`} ); }} href="#">open {element}</a>
        <br />
        <a onClick={() => { this.props.closePage({ pageId: `home${index}`} ); }} href="#">close {element}</a>
      </li>
      ),
    );
  render() {
    return (
      <ul>
        {this.props.title}
        {this.renderList()}
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  openPage: bindActionCreators(openPage, dispatch),
  closePage: bindActionCreators(closePage, dispatch),
});

export default connect(null, mapDispatchToProps)(Navigation);