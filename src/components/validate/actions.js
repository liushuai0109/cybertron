/**
 * Documents of redux-actions: https://www.gitbook.com/book/vinnymac/redux-actions/details
 */
import {createActions} from 'redux-actions';
import {doSomethingAsyncRequest} from 'components/api';

/**
 * define an async action as follows:
 *
 * import some request method from the `api` component if needed.
 *
 * as an example, the following code needs to import a method like this:
 *
 * import {doSomethingAsyncRequest} from 'api';
 */

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
/**
 * define a sync action as follows:
 */

export const actionCreators = createActions({
    DO_SOMETHING: (data) => {
        // return your action payload via data or just return null
    }
});