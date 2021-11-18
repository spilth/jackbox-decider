import React, { useMemo, useState } from "react";
import GamesTable from "./GamesTable";
import games from "./games";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const App = () => {
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

  const filteredGames = useMemo(() => games.filter((game) => {
    return players >= game.minPlayers && players <= game.maxPlayers
  }), [players])

  return (
    <div>
      <h1 className="text-center">Jackbox Decider</h1>
      <h2 className="text-center">How many people?</h2>
      <div className="text-center">
        <ToggleButtonGroup
          type="radio"
          name="options"
          value={players}
          onChange={(val) => setPlayers(val)}
          className="mb-4"
        >
          {buttonValues.map((button) => (
            <ToggleButton key={button.count} value={button.count}>
              {button.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <div>
        <h2 className="text-center">
          {filteredGames.length} game{filteredGames.length > 1 && "s"} to play!
        </h2>
        <GamesTable games={filteredGames} />
      </div>

      <h6 className="text-center">
        <a href="https://github.com/spilth/jackbox-decider">
          https://github.com/spilth/jackbox-decider
        </a>
      </h6>
    </div>
  );
};

export default App;
