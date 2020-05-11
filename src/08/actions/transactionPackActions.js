import Api from '../Api';

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';

export function requestTransactionList(params) {
  return {
    type: FETCH_TRANSACTION_LIST,
    promise: Api.get('/transactions', {params})
  };
}