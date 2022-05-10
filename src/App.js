import './App.css';
import withFetch from './withFetch';

const TEAMS_URL = 'https://www.balldontlie.io/api/v1/teams';

function App({ data: teams, color }) {
  return (
    <div className="App" style={{ color }}>
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

export default withFetch(TEAMS_URL)(App);
