import './style.scss';

import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import {actionCreators} from './actions';

const Nav = (props) => {
    const {isOpen, onConfirm} = props;
    return (<div className="component-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/survey">Survey</Link>
    </div>)
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onConfirm: () => {
            console.log('confirm click');
            const {onClose}  = ownProps;
            dispatch(actionCreators.close());
            onClose && onClose();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);