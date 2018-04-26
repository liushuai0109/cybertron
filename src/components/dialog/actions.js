import {createActions} from 'redux-actions';
import {doSomethingAsyncRequest} from 'components/api';

const doSomethingAsyncActions = createActions(
    'DO_SOMETHING_ASYNC_SUCCEED',
    'DO_SOMETHING_ASYNC_FAILED',
    'DO_SOMETHING_ASYNC_STARTED',
    'DO_SOMETHING_ASYNC_ENDED'
);

export const doSomethingAsync = () => {
    const {
        doSomethingAsyncStarted,
        doSomethingAsyncSucceed,
        doSomethingAsyncFailed,
        doSomethingAsyncEnded,
    } = doSomethingAsyncActions;

    return (dispatch) => {
        dispatch(doSomethingAsyncStarted());
        return doSomethingAsyncRequest({
            // your request data goes here
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                dispatch(doSomethingAsyncSucceed({
                    // your action payload goes here
                }));
            } else {
                dispatch(doSomethingAsyncFailed({
                    // your action payload goes here
                }));
            }
            dispatch(doSomethingAsyncEnded({
                // your action payload goes here
            }));
        }).catch((error) => {
            dispatch(doSomethingAsyncFailed({
                // your action payload goes here
            }));
            dispatch(doSomethingAsyncEnded({
                // your action payload goes here
            }));
        });
    }
};

const actionCreators =  createActions({
    OPEN: () => null,
    CLOSE: () => null
});

export default {
    ...actionCreators,
    doSomethingAsync
}