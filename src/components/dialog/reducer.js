import {handleActions} from 'redux-actions';

export default handleActions({
    OPEN: (state) => {
        return {
            ...state,
            isOpen: true
        }
    },
    CLOSE: (state) => {
        return {
            ...state,
            isOpen: false
        }
    },
    DO_SOMETHING_ASYNC_SUCCEED: (state) => {
        console.log('DO_SOMETHING_ASYNC_SUCCEED');
        return {
            ...state
        }
    },
    DO_SOMETHING_ASYNC_FAILED: (state) => {
        console.log('DO_SOMETHING_ASYNC_FAILED');
        return {
            ...state
        }
    },
    DO_SOMETHING_ASYNC_STARTED: (state) => {
        console.log('DO_SOMETHING_ASYNC_STARTED');
        return {
            ...state
        }
    },
    DO_SOMETHING_ASYNC_ENDED: (state) => {
        console.log('DO_SOMETHING_ASYNC_ENDED');
        return {
            ...state
        }
    }
}, {
    isOpen: false
})