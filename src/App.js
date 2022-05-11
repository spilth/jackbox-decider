import React, { useMemo, useState } from "react";
import games from "./games";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import GameCards from "./GameCards";

const App = () => {
  const [players, setPlayers] = useState(4);
  const [language, setLanguage] = useState("en");

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
  const langValues = [
    { label: "English", language: "en" },
    { label: "Russian", language: "ru" },
  ];

  const filteredGames = useMemo(
    () =>
      games
        .filter((game) => {
          return players >= game.minPlayers && players <= game.maxPlayers;
        })
        .map((game) => {
          game.display_name = game.name[language] || game.name.en;
          game.display_description =
            game.description[language] || game.description.en;
          game.display_image =
            game.image &&
            (game.image[language]
              ? "/images/" + language + "/" + game.image[language]
              : "/images/en/" + game.image.en);
          return game;
        }),
    [players, language]
  );

  return (
    <div>
      <h1 className="text-center">Jackbox Decider</h1>
      <div className="text-center">
        <span>Select language: </span>
        <ToggleButtonGroup
          type="radio"
          name="language"
          value={language}
          onChange={(value) => setLanguage(value)}
          className="mb-1"
          size="sm"
        >
          {langValues.map((button) => (
            <ToggleButton
              id={button.language}
              key={button.language}
              value={button.language}
              type="radio"
            >
              {button.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <h2 className="text-center">How many people?</h2>
      <div className="text-center">
        <ToggleButtonGroup
          type="radio"
          name="players"
          value={players}
          onChange={(value) => setPlayers(value)}
          className="mb-4"
        >
          {buttonValues.map((button) => (
            <ToggleButton
              id={button.count}
              key={button.count}
              value={button.count}
              type="radio"
            >
              {button.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <div>
        <h2 className="text-center">
          {filteredGames.length} game{filteredGames.length > 1 && "s"} to play!
        </h2>
        <GameCards games={filteredGames} />
      </div>

      <h6 className="text-center mb-4">
        <a href="https://github.com/spilth/jackbox-decider">
          https://github.com/spilth/jackbox-decider
        </a>
      </h6>
    </div>
  );
};

export default App;
