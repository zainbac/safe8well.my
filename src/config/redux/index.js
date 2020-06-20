import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
//
// Initial State...
//
const initialState = {
    favoriteAnimal: "duck",
};

//
// Reducer...
//
const reducer = (state = initialState, action) => {
    return state;
}

//
// Reducer...
//
const reducer = (state = initialState, action) => {

};

const store = createStore(reducer, applyMiddleware(thunkMiddlewarw));
export { store };