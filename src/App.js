import { useEffect, useState } from 'react';
import './App.css';

const TEAMS_URL = 'https://www.balldontlie.io/api/v1/teams';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(TEAMS_URL)
      .then(response => response.json())
      .then(({ data }) => setTeams(data));
  }, []);

  return (
    <div className="App">
      <h1>Teams</h1>
      {teams.length > 0 && (
        <ul>
          {teams.map(team => (
            <li>{team.full_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
