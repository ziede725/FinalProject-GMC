import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import rootReducer from '../Reducers/rootReducer'

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

   const enhancers = [middlewareEnhancer]
   const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, composedEnhancers)

  return store
}


