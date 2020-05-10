import {SET_ERROR} from '../actions/transactionActions';
import {showMessage} from '../actions/notificationActions';

export default store => nextRunner => action => {
  const {type, payload} = action;

  if (type === SET_ERROR) {
    const {errorMessage} = payload;
    store.dispatch(showMessage(errorMessage, true));
  }
  return nextRunner(action);
}