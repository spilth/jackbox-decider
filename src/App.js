import React, { useState } from "react";
import "./App.css";
import GamesTable from "./GamesTable";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function App() {
  const [players, setPlayers] = useState(3);

  return (
    <div>
      <h1 className="text-center">Jackbox Decider</h1>
      <h2 className="text-center">How many players?</h2>
      <div className="text-center">
        <ToggleButtonGroup
          type="radio"
          name="options"
          value={players}
          onChange={(val) => setPlayers(val)}
          className="mb-4"
        >
          <ToggleButton value={1}>1</ToggleButton>
          <ToggleButton value={2}>2</ToggleButton>
          <ToggleButton value={3}>3</ToggleButton>
          <ToggleButton value={4}>4</ToggleButton>
          <ToggleButton value={5}>5</ToggleButton>
          <ToggleButton value={6}>6</ToggleButton>
          <ToggleButton value={7}>7</ToggleButton>
          <ToggleButton value={8}>8</ToggleButton>
          <ToggleButton value={9}>9+</ToggleButton>
          <ToggleButton value={17}>17+</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <GamesTable playerCount={players} />
    </div>
  );
}

export default App;
