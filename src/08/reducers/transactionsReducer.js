// import { LOADING_TRANSACTION_LIST, SET_ERROR, SET_TRANSACTION_LIST } from '../actions/transactionActions';
import {handle} from 'redux-pack';
import { CREATE_TRANSACTION, FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';

const initState = {
  ids: [],
  entities: {},
  loadingState: {
    [CREATE_TRANSACTION]: false,
    [FETCH_TRANSACTION_LIST]: false
  },
  errorState: {
    [CREATE_TRANSACTION]: false,
    [FETCH_TRANSACTION_LIST]: false
  },
  pagination: []
}

export default (state = initState, action) => {
  const {type, payload, meta} = action;

  switch (type) {
    case FETCH_TRANSACTION_LIST: {
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          loadingState: {
            ...prevState.loadingState,
            [type]: true
          },
          errorState: {
            ...prevState.errorState,
            [type]: false
          }
        }),
        success: prevState => {
          const { data } = payload;
          const loadingAndErrorState = {
            loadingState: {
              ...prevState.loadingState,
              [type]: false,
            },
            errorState: {
              ...prevState.errorState,
              [type]: false,
            },
          };
          if (type === FETCH_TRANSACTION_LIST) {
            const { pageNumber, pageSize } = meta || {};
            const ids = data.map(entity => entity['id']);
            const entities = data.reduce(
              (finalEntities, entity) => ({
                ...finalEntities,
                [entity['id']]: entity,
              }),
              {},
            );
            return {
              ...prevState,
              ...loadingAndErrorState,
              ids,
              entities: { ...prevState.entities, ...entities },
              pagination: {
                number: pageNumber,
                size: pageSize,
              },
            };
          } else {
            const id = data['id'];
            return {
              ...prevState,
              ...loadingAndErrorState,
              id,
              entities: { ...prevState.entities, [id]: data },
            };
          }
        },
        failure: prevState => {
          const {errorMessage} = payload.response.data;
          return {
            ...prevState,
            loadingState: {
              ...prevState.loadingState,
              [type]: false
            },
            errorState: {
              ...prevState.errorState,
              [type]: errorMessage || true
            }
          };
        }
      });
    }
    // case SET_ERROR: {
    //   return {
    //     ...state,
    //     loading: false,
    //     hasError: true,
    //     errorMessage: payload.errorMessage
    //   }
    // }
    // case LOADING_TRANSACTION_LIST: {
    //   return {
    //     ...state,
    //     loading: true,
    //     hasError: false
    //   }
    // }
    // case SET_TRANSACTION_LIST: {
    //   const ids = payload.map(entity => entity['id']);
    //   const entities = payload.reduce((finalEntities, entity) => ({
    //     ...finalEntities,
    //     [entity['id']]: entity
    //   }), {});
    //   return {...state, ids, entities, loading: false, hasError: false};
    // }
    default:
      return state;
  }
}