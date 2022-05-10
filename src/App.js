import { useCallback } from 'react';
import './App.css';
import Fetch from './Fetch';
import List from './List';
// import withFetch from './withFetch';

const TEAMS_URL = 'https://www.balldontlie.io/api/v1/teams';
const PLAYERS_URL = 'https://www.balldontlie.io/api/v1/players';

function App({ color }) {
  const renderTeams = useCallback(
    teams => (
      <List
        items={teams}
        renderItem={({ full_name }) => (
          <span className="team">{full_name}</span>
        )}
        getKey={({ abbreviation }) => abbreviation}
      />
    ),
    [],
  );

  return (
    <div className="App" style={{ color }}>
      <h1>Teams</h1>
      <Fetch url={TEAMS_URL}>{renderTeams}</Fetch>
      <Fetch url={PLAYERS_URL}>
        {players => (
          <List
            items={players}
            getKey={({ id }) => id}
            renderItem={({ first_name, last_name }) =>
              `${first_name}-${last_name}`
            }
          />
        )}
      </Fetch>
    </div>
  );
}

// export default withFetch(TEAMS_URL)(App);
export default App;
