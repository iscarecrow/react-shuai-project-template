
import React, { Component } from 'react';
import { Breadcrumb } from 'zent';
import { connect } from 'react-redux';

import './style.scss';

class PageAView extends Component {
  render() {
    return (
      <div>
        <p>pageA</p>
      </div>
    );
  }
}


export default connect(state => {
  return {
    pageA: state.pageA
  };
})(PageAView);
