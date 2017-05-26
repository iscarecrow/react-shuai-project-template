import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

class PageBView extends Component {
  render() {
    return (
      <div>
        <p>pageB</p>
      </div>
    );
  }
}


export default connect(state => {
  return {
    pageB: state.pageB
  };
})(PageBView);
