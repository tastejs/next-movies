
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import combinedReducer from './reducers';

const bindMiddlewares = middlewares => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);

    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return applyMiddleware(...middlewares);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    // TODO: handling is required according to https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation
    // RE: https://github.com/kirill-konshin/next-redux-wrapper#state-reconciliation-during-hydration
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddlewares([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
