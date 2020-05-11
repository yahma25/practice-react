import {SET_ERROR} from '../actions/transactionActions';
import { SHOW_NOTIFICATION, showMessage, hideMessage } from '../actions/notificationActions';
import { debounce } from '../../02/debounce';
import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';
import { KEY, LIFECYCLE } from 'redux-pack';

const debounceRunner = debounce(action => action(), 3000);

export default store => nextRunner => action => {
  const {type, payload, meta} = action;

  if (type === SET_ERROR) {
    const {errorMessage} = payload;
    store.dispatch(showMessage(errorMessage, true));

  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    // setTimeout(hide, 3000);
    debounceRunner(hide);

  } else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
    const {errorMessage} = payload.response.data || {};
    store.dispatch(showMessage(errorMessage, true));
  }
  return nextRunner(action);
}