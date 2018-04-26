import {createActions} from 'redux-actions'
import {actionCreators as dialogActionCreators} from 'components/dialog/actions';

const actionCreators = createActions({
    OPEN_DIALOG: content => ({content})
});

export default {
    ...actionCreators
}