import Api from '../Api';

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';

export function createTransaction(data, onComplete) {
  return {
    type: CREATE_TRANSACTION,
    promise: Api.post('/transactions', data),
    meta: {
      onSuccess: onComplete
    }
  };
}

export function requestTransactionList(params) {
  return {
    type: FETCH_TRANSACTION_LIST,
    promise: Api.get('/transactions', {params})
  };
}