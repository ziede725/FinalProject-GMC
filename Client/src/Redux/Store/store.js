import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import allReducers from '../Reducers/index'

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

   const enhancers = [middlewareEnhancer]
   const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(allReducers, composedEnhancers)
  // const store = createStore(allReducers,...enhancers)

  return store
}


