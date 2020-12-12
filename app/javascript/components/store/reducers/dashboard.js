import {
	FETCH_DASHBOARD_SUCCESS,
	FETCH_DASHBOARD_FAILURE
} from '../../constants/actionTypes';

const initialState = {
	dashboardList: [],
	loading: true,
	errorMessage: null,
};

const currencies = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DASHBOARD_SUCCESS: {
			return {
				...state,
				dashboardList: action.dashboardList,
				loading: false,
				errorMessage: null
			};
		}
		case FETCH_DASHBOARD_FAILURE: {
			return {
				...state,
				errorMessage: action.errorMessage,
				loading: false
			};
		}
		default: {
			return state;
		}
	}
};

export default currencies;