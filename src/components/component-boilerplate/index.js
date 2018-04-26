import './style.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import actionCreators from './actions';
import reducer from './reducer';

class ComponentBoilerplate extends Component {
    render() {
        return (<div className="component-component-boilerplate">

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
export default connect(mapStateToProps, mapDispatchToProps)(ComponentBoilerplate);