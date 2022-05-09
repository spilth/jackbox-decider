import React, { useMemo, useState } from "react";
import games from "./games";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import GameCards from "./GameCards";

const App = () => {
  const [players, setPlayers] = useState(4);
  const [lang, setLang] = useState("en");

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
    { label: "English", lang: "en" },
    { label: "Russian", lang: "ru" },
  ];

  const filteredGames = useMemo(
    () =>
      games
        .filter((game) => {
          return players >= game.minPlayers && players <= game.maxPlayers;
        })
        .map((game) => {
          game.display_name =
            typeof game.name === "object" && lang in game.name
              ? game.name[lang]
              : game.name;
          game.display_description =
            typeof game.description === "object" && lang in game.description
              ? game.description[lang]
              : game.description;
          return game;
        }),
    [players, lang]
  );

  return (
    <div>
      <h1 className="text-center">Jackbox Decider</h1>
      <div className="text-center">
        <span>Select language: </span>
        <ToggleButtonGroup
          type="radio"
          name="options_lang"
          value={lang}
          onChange={(val) => setLang(val)}
          className="mb-1"
          size="sm"
        >
          {langValues.map((button) => (
            <ToggleButton key={button.lang} value={button.lang}>
              {button.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
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
