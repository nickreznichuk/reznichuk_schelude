import { combineReducers } from 'redux';
import dashboard from './dashboard';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	routing: routerReducer,
	dashboard,
});