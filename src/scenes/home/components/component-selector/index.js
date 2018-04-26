import './style.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import actionCreators from './actions';
import reducer from './reducer';

class ComponentSelector extends Component {
    componentWillMount() {
        // todo 监听Ready广播
    }
    componentDidMount() {
        // todo 关键组件Ready后初始化组件拖拽
    }
    render() {
        return (<div className="component-component-selector">

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
export default connect(mapStateToProps, mapDispatchToProps)(ComponentSelector);