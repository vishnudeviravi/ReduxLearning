import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './Redux/Reducers';

const store = createStore(
    rootReducer
)

const reduxProvider = props => <Provider store = {store}>{props.children}</Provider>

export default reduxProvider;