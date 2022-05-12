import React, { useMemo, useState } from "react";
import games from "./games";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import GameCards from "./GameCards";
import translations from "./translations";

const App = () => {
  const [players, setPlayers] = useState(4);
  const [language, setLanguage] = useState("en");

  const playerButtons = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9+", value: 9 },
    { label: "17+", value: 17 },
  ];
  const languageButtons = [
    { label: "English", value: "en" },
    { label: "Russian", value: "ru" },
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
          game.has_translation =
            language === "en" ? null : game.translations.includes(language);
          return game;
        }),
    [players, language]
  );

  return (
    <div>
      <h1 className="text-center">Jackbox Decider</h1>
      <div className="text-center">
        <span>{translations.select_language[language]}</span>
        <ToggleButtonGroup
          type="radio"
          name="language"
          value={language}
          onChange={(value) => setLanguage(value)}
          className="mb-1"
          size="sm"
        >
          {languageButtons.map((button) => (
            <ToggleButton
              id={button.value}
              key={button.value}
              value={button.value}
              type="radio"
            >
              {button.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <h2 className="text-center">{translations.how_many_people[language]}</h2>
      <div className="text-center">
        <ToggleButtonGroup
          type="radio"
          name="players"
          value={players}
          onChange={(value) => setPlayers(value)}
          className="mb-4"
        >
          {playerButtons.map((button) => (
            <ToggleButton
              id={button.value}
              key={button.value}
              value={button.value}
              type="radio"
            >
              {button.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <div>
        <h2 className="text-center">
          {translations.display_game_count[language](filteredGames.length)}
        </h2>
        <GameCards games={filteredGames} lang={language} />
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
