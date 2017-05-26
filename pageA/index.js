import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

class PageAView extends Component {
  render() {
    return (
      <div>
        <p>{this.props.pageA.name}</p>
      </div>
    );
  }
}


export default connect(state => {
  return {
    pageA: state.pageA
  };
})(PageAView);
