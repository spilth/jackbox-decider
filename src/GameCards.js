import React from "react";
import {
  faChild,
  faHourglass,
  faCommentSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameCards = ({ games }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
      {games.map((game) => {
        return (
          <div className="col" key={game.name}>
            <div className="card mb-2">
              {game.image && (
                <a href={game.url}>
                  <img
                    src={`/images/${game.image}`}
                    className="card-img-top"
                    alt={game.name}
                  />
                </a>
              )}
              <div className="card-body">
                <h5 className="card-title">
                  <a href={game.url} className="text-decoration-none">
                    {game.name}
                  </a>
                </h5>
                <h6 className="card-subtitle text-muted">
                  {game.minPlayers} - {game.maxPlayers} players
                </h6>
                <p className="card-text">{game.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                {game.familyFriendlySetting && (
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faChild} fixedWidth /> Family
                    Friendly Setting
                  </li>
                )}
                {game.manualCensoring && (
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faCommentSlash} fixedWidth /> Manual
                    Censoring
                  </li>
                )}
                {game.extendedTimers && (
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faHourglass} fixedWidth /> Extended
                    Timers
                  </li>
                )}
              </ul>
              <div className="card-footer">
                {game.pack_url ? (
                  <span>
                    Part of{" "}
                    <a href={game.pack_url} className="text-decoration-none">
                      {game.pack}
                    </a>
                  </span>
                ) : (
                  <span>{game.pack}</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameCards;
