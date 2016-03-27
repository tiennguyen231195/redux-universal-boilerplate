import {
  FETCH_TRENDS_SUCCESS,
  FETCH_TRENDS_FAILURE
} from '../constants/actions/Github';

import axios from 'axios';

const date = new Date();
const URL = 'https://api.github.com/search/repositories' +
            '?q=react' +
            '&created:>2016-01-01' +
            '&sort=stars';

export function fetchTrends() {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL);

      dispatch({
        type: FETCH_TRENDS_SUCCESS,
        trends: response.data.items
      });
    } catch (error) {
      dispatch({
        type: FETCH_TRENDS_FAILURE,
        error: error.message || 'Unknown error occured'
      });
    }
  };
}