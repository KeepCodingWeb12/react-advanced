import { useEffect, useReducer } from 'react';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(fetchRequest());
    fetch(url)
      .then(response => response.json())
      .then(({ data }) => dispatch(fetchSuccess(data)))
      .catch(error => dispatch(fetchFailure(error)));
  }, [url]);

  return state;
}

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: error,
  error: true,
});
