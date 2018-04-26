import './style.scss';

import React from 'react';
import {connect} from 'react-redux';

import actionCreators from './actions';
import reducer from './reducer';

const Dialog = (props) => {
    const {
        isOpen,
        onConfirm,
        onBtnMockClick
    } = props;
    return (<div className="component-dialog" data-is-open={isOpen || null}>
        <div className="dialog">
            <div className="dialog-body">
                {props.children}
                <button className="btn-mock" onClick={onBtnMockClick}>Mock a fetch</button>
            </div>
            <div className="dialog-buttons">
                <button onClick={onConfirm}>确定</button>
            </div>
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return state.dialog;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onConfirm: () => {
            const {onClose} = ownProps;
            dispatch(actionCreators.close());
            onClose && onClose();
        },
        onBtnMockClick: () => {
            dispatch(actionCreators.doSomethingAsync());
        }
    }
};

export {actionCreators};
export {reducer};
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);