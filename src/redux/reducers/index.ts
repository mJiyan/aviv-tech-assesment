import { combineReducers } from 'redux';
import propertyReducer from './Property';

const RootReducer = combineReducers({
    property: propertyReducer,
});

export default RootReducer;
