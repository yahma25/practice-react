import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import notificationEffects from '../middlewares/notificationEffects';
import transactionEffects from '../middlewares/transactionEffects';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import searchFilterEffects from '../middlewares/searchFilterEffects';
import routerEffects from '../middlewares/routerEffects';

// middleware 순서 중요
export default initStates => createStore(
  combineReducers(reducers),
  initStates,
  composeWithDevTools(applyMiddleware(
    thunk, reduxPackMiddleware,
    notificationEffects, transactionEffects, searchFilterEffects, routerEffects)
  )
);