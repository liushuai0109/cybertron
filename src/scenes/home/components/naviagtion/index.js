import './style.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import actionCreators from './actions';
import reducer from './reducer';

class Navigation extends Component {
  render() {
    return (<div className="component-navigation">
      <div className="brand">
        <a href="/">Superion</a>
      </div>
      <div className="workspace-tabs">
        <div className="tab">编辑区</div>
        <div className="tab">页面列表区</div>
        <div className="tab">cdn工具</div>
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export {actionCreators};
export {reducer};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);