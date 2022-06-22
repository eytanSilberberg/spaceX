// import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { landingReducer } from './landing/landing.reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

const rootReducer = combineReducers({
  landingModule: landingReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.myStore = store