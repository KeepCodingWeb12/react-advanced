import { useCallback } from 'react';
import './App.css';
import Fetch from './Fetch';
// import withFetch from './withFetch';

const TEAMS_URL = 'https://www.balldontlie.io/api/v1/teams?';
const PLAYERS_URL = 'https://www.balldontlie.io/api/v1/players';

function App({ color }) {
  const renderTeams = useCallback(
    teams =>
      teams.length > 0 && (
        <ul>
          {teams.map(team => (
            <li key={team.id}>{team.full_name}</li>
          ))}
        </ul>
      ),
    [],
  );

  return (
    <div className="App" style={{ color }}>
      <h1>Teams</h1>
      <Fetch url={TEAMS_URL}>{renderTeams}</Fetch>
      <Fetch url={PLAYERS_URL}>{players => players[0]?.last_name}</Fetch>
    </div>
  );
}

// export default withFetch(TEAMS_URL)(App);
export default App;
