import { 
	FETCH_DASHBOARD_SUCCESS,
	FETCH_DASHBOARD_FAILURE
} from '../../constants/actionTypes';

export const fetchDashboardSuccess = dashboardList => ({
	type: FETCH_DASHBOARD_SUCCESS,
	dashboardList
});

export const fetchDashboardFailure = message => ({
	type: FETCH_DASHBOARD_FAILURE,
	message
});

