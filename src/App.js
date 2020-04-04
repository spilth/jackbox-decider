import React, { useState } from "react";
import "./App.css";
import GamesTable from "./GamesTable";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function App() {
  const [players, setPlayers] = useState(3);

  const buttonValues = [
    { label: "1", count: 1 },
    { label: "2", count: 2 },
    { label: "3", count: 3 },
    { label: "4", count: 4 },
    { label: "5", count: 5 },
    { label: "6", count: 6 },
    { label: "7", count: 7 },
    { label: "8", count: 8 },
    { label: "9+", count: 9 },
    { label: "17+", count: 17 },
  ];

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
          {buttonValues.map((button) => (
            <ToggleButton key={button.count} value={button.count}>{button.label}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <h2 className="text-center">You can play the following games:</h2>

      <GamesTable playerCount={players} />

      <h6 className="text-center">
        Source Code:{" "}
        <a href="https://github.com/spilth/jackbox-decider">
          https://github.com/spilth/jackbox-decider
        </a>
       </h6>
    </div>
  );
}

export default App;
