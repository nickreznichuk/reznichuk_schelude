import { get, post } from 'axios';
import { fetchDashboardSuccess, fetchDashboardFailure } from '../store/actions/dashboard';
import { store } from '../App';

const getCSRFToken = () => {
  const metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i++) {
    const meta = metas[i];
    if (meta.getAttribute('name') === 'csrf-token') {
      return meta.getAttribute('content');
    }
  }

  return null;
};

const getHeaders = () => {
  return {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'X-CSRF-Token': getCSRFToken(),
  };
};

export const fetchDashboard = () => {
  const { dispatch } = store;
  get('http://localhost:5000/api/v1/dashboard').then(dashboard => {
    dispatch(fetchDashboardSuccess(dashboard.data));
  }).catch(({ response}) => {
    console.log(response);
    // dispatch(fetchDashboardFailure(message));
  });
};

export const createRecord = data => {
  const { dispatch } = store;
  post('http://localhost:5000/api/v1/new_record', {params: {...data}, headers: getHeaders()}).then(response => {
    // dispatch(fetchDashboardSuccess(dashboard.data));
    console.log(response);
  }).catch(({response}) => {
    console.log(response);
    // dispatch(fetchDashboardFailure(message));
  });
};