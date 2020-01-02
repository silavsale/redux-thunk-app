import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import movieListReducer from './reducers/movieListReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

// Logger with default options
import logger from 'redux-logger';

const reducer = combineReducers({ movie: movieListReducer, users: userReducer });

const middleWare = [thunk];

const initialState = {
    users: [],
    movie: { name: "Scream" }
}

const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(logger, ...middleWare))
);

export default store;

