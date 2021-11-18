import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheck,
  faChild,
  faStopwatch,
  faTimes,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const GamesTable = ({ games }) => {
  return (
    <table className="table table-striped table-borderless">
      <thead>
        <tr>
          <th>Name</th>
          <th className="d-none d-md-table-cell">Party Pack</th>
          <th>
            <span className="d-none d-sm-table-cell">Players</span>{" "}
            <FontAwesomeIcon icon={faUsers} fixedWidth />
          </th>
          <th className="text-center">
            <span className="d-none d-sm-table-cell">
              Family Friendly Setting
            </span>{" "}
            <FontAwesomeIcon icon={faChild} fixedWidth />
          </th>
          <th className="text-center">
            <span className="d-none d-sm-table-cell">Manual Censoring</span>{" "}
            <FontAwesomeIcon icon={faBan} fixedWidth />
          </th>
          <th className="text-center">
            <span className="d-none d-sm-table-cell">Extended Timers</span>{" "}
            <FontAwesomeIcon icon={faStopwatch} fixedWidth />
          </th>
          <th className="d-none d-md-table-cell">Description</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game) => {
          return (
            <tr key={game.name}>
              <td>
                <a href={game.url}>{game.name}</a>
              </td>
              <td className="d-none d-md-table-cell">
                <a href={game.pack_url}>{game.pack}</a>
              </td>
              <td>
                {game.minPlayers}-{game.maxPlayers}
              </td>
              <td className="text-center">
                {game.familyFriendlySetting ? (
                  <FontAwesomeIcon icon={faCheck} fixedWidth color="green" />
                ) : (
                  <FontAwesomeIcon icon={faTimes} fixedWidth color="red" />
                )}
              </td>
              <td className="text-center">
                {game.manualCensoring ? (
                  <FontAwesomeIcon icon={faCheck} fixedWidth color="green" />
                ) : (
                  <FontAwesomeIcon icon={faTimes} fixedWidth color="red" />
                )}
              </td>
              <td className="text-center">
                {game.extendedTimers ? (
                  <FontAwesomeIcon icon={faCheck} fixedWidth color="green" />
                ) : (
                  <FontAwesomeIcon icon={faTimes} fixedWidth color="red" />
                )}
              </td>
              <td className="d-none d-md-table-cell">{game.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GamesTable;
