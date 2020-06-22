import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

const filesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_FILES':
      state = action.payload;
      break;

    default:
      break;
  }
  return state;
};

const statsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_STATS':
      state = action.payload;
      break;

    default:
      break;
  }
  return state;
};

const navReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TITLE':
      state = action.payload;
      break;

    default:
      break;
  }
  return state;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  files: filesReducer,
  stats: statsReducer,
  title: navReducer,
});

const store = createStore(
  combinedReducers,
  {},
  composeEnhancers(applyMiddleware())
);

export default store;
