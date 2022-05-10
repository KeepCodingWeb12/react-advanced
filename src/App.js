import { useEffect, useReducer } from 'react';
import './App.css';

const TEAMS_URL = 'https://www.balldontlie.io/api/v1/te';

const initialState = {
  isLoading: false,
  teams: [],
  error: null,
};

const TEAMS_FETCH_REQUEST = 'TEAMS_FETCH_REQUEST';
const TEAMS_FETCH_SUCCESS = 'TEAMS_FETCH_SUCCESS';
const TEAMS_FETCH_FAILURE = 'TEAMS_FETCH_FAILURE';

const reducer = (state, action) => {
  switch (action.type) {
    case TEAMS_FETCH_REQUEST:
      return { ...state, isLoading: true, error: null };
    case TEAMS_FETCH_SUCCESS:
      return { ...state, isLoading: false, teams: action.payload };
    case TEAMS_FETCH_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

const fetchTeamsRequest = () => ({
  type: TEAMS_FETCH_REQUEST,
});

const fetchTeamsSuccess = teams => ({
  type: TEAMS_FETCH_SUCCESS,
  payload: teams,
});

const fetchTeamsFailure = error => ({
  type: TEAMS_FETCH_FAILURE,
  payload: error,
  error: true,
});

function App() {
  const [{ isLoading, teams, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    dispatch(fetchTeamsRequest());
    fetch(TEAMS_URL)
      .then(response => response.json())
      .then(({ data }) => dispatch(fetchTeamsSuccess(data)))
      .catch(error => dispatch(fetchTeamsFailure(error)));
  }, []);

  if (isLoading) return 'Loading...';
  if (error) return `Meeehh, error: ${error.message}`;

  return (
    <div className="App">
      <h1>Teams</h1>
      {teams.length > 0 && (
        <ul>
          {teams.map(team => (
            <li key={team.id}>{team.full_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
