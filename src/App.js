import React, { useMemo, useState } from "react";
import games from "./games";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import GameCards from "./GameCards";
import translations from "./translations";

const App = () => {
  const [players, setPlayers] = useState(4);
  const [language, setLanguage] = useState("en");
  const [sortField, setSortField] = useState("displayName");
  const [sortDirection, setSortDirection] = useState(0);

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
  const sortButtons = [
    { label: "name", value: "displayName" },
    { label: "pack", value: "pack" },
  ];

  function changeSort(value) {
    if (sortField !== value) setSortDirection(1);
    else setSortDirection(sortDirection === 0 ? -1 : sortDirection * -1);
    setSortField(value);
  }

  const localizedGames = useMemo(
    () =>
      games.map((game) => {
        game.displayName = game.name[language] || game.name.en;
        game.displayDescription =
          game.description[language] || game.description.en;
        game.displayImage =
          game.image &&
          (game.image[language]
            ? "/images/" + language + "/" + game.image[language]
            : "/images/en/" + game.image.en);
        game.hasTranslation =
          language === "en" ? null : game.translations.includes(language);
        return game;
      }),
    [language]
  );

  const filteredGames = useMemo(
    () =>
      localizedGames.filter((game) => {
        return players >= game.minPlayers && players <= game.maxPlayers;
      }),
    [players, localizedGames]
  );

  const sortedGames = useMemo(
    () =>
      filteredGames.sort((a, b) =>
        sortDirection >= 0
          ? a[sortField].localeCompare(b[sortField])
          : b[sortField].localeCompare(a[sortField])
      ),
    [sortField, sortDirection, filteredGames]
  );

  return (
    <div>
      <h1 className="text-center">Jackbox Decider</h1>
      <div className="text-center">
        <span>{translations.selectLanguage[language]}</span>
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
      <h2 className="text-center">{translations.howManyPeople[language]}</h2>
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
        <span>{translations.sortBy[language]}</span>
        <ButtonGroup name="sort" className="mb-1" size="sm">
          {sortButtons.map((button) => (
            <Button id={button.value} onClick={() => changeSort(button.value)}>
              {translations[button.label][language]}
              {sortField === button.value && sortDirection !== 0
                ? sortDirection === 1
                  ? "👆️"
                  : "👇"
                : ""}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div>
        <h2 className="text-center">
          {translations.displayGameCount[language](sortedGames.length)}
        </h2>
        <GameCards games={sortedGames} language={language} />
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
