import './style.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import actionCreators from './actions';
import reducer from './reducer';

class Preview extends Component {
  componentDidMount() {
    // todo 发送Ready广播
  }
  render() {
    return (<div className="component-preview">
      <div className="label-mode bg-info" data-mode="编辑模式" style={{display: "none"}}/>
      <div className="iphone">
        <div className="widget-container">
          <iframe className="emulator" src="/cybertron/emulator"/>
          <div data-accept-type="ui" id="page-manager"/>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Preview);