import './style.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import actionCreators from './actions';
import reducer from './reducer';

class PageEditor extends Component {
  componentDidMount() {
    // todo 发送Ready广播
  }
  render() {
    return (<div className="component-page-editor">
      <div className="editors">
        {/*<div class="widget-container">
            <div data-accept-type="non-ui"></div>
        </div>*/}
        <h4>页面配置</h4>
        <div className="page" />
        <h4>不可见模块</h4>
        <div className="non-ui" data-accept-type="non-ui" />
        <h4>可见模块</h4>
        <div className="ui" />
      </div>
      <div className="buttons">
        <button className="btn btn-primary btn-preview" data-mode="预览" style={{display: "none"}} />
        <button className="btn btn-primary btn-save">保存</button>
        <button className="btn btn-primary btn-save-as">另存为</button>
        <button className="btn btn-primary btn-release">发布</button>
      </div>
      <input type="hidden" className="uid"/>
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
export default connect(mapStateToProps, mapDispatchToProps)(PageEditor);