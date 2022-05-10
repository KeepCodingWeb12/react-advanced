import './App.css';
import { useFetch } from './useFetch';

const TEAMS_URL = 'https://www.balldontlie.io/api/v1/teams';

function App() {
  const { isLoading, data: teams, error } = useFetch(TEAMS_URL);

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
