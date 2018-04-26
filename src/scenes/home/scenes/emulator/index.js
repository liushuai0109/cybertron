import './style.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import actionCreators from './actions';
import reducer from './reducer';

class Emulator extends Component {
    render() {
        return (<div className="component-emulator">

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
export default connect(mapStateToProps, mapDispatchToProps)(Emulator);