import React, { useState } from 'react';
import './App.css';
import GamesTable from "./GamesTable";

function App() {
    const [players, setPlayers] = useState(3);

    return (
        <div>
            <h1>Jackbox Decider</h1>

            <p>How many players? <input type="number" min={1} max={99} value={players} onChange={(e) => setPlayers(e.target.value)}/></p>

            <GamesTable playerCount={players} />
        </div>
    );
}

export default App;
