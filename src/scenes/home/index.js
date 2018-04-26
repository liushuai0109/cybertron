import './style.scss'

import React from 'react'
import {connect} from 'react-redux'
import Dialog, {actionCreators as dialogActionCreators} from 'components/dialog'

import Navigation from './components/naviagtion'
import ComponentSelector from './components/component-selector'
import Preview from './components/preview'
import PageEditor from './components/page-editor'

import actionCreators from './actions'
import reducer from './reducer'


const Home = (props) => {
  const {
    onButtonClick,
    onBtnMockClick
  } = props;
  return <div className="scene-home">
    <Navigation/>
    <div className="main">
      <div className="workspace">
        <ComponentSelector/>
        <Preview/>
        <PageEditor/>
      </div>
      <div className="workspace" style={{display: "none"}}/>
      <div className="workspace" style={{display: "none"}}/>
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return state.home || {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(dialogActionCreators.open());
    },
    onBtnMockClick: () => {
      dispatch(dialogActionCreators.doSomethingAsync());
    }
  }
};

export {actionCreators};
export {reducer};
export default connect(mapStateToProps, mapDispatchToProps)(Home);