import React from "react";
import games from "./games";

function GamesTable({ playerCount }) {
  let filteredGames = games.filter((game) => {
    return playerCount >= game.minPlayers && playerCount <= game.maxPlayers;
  });

  return (
    <div>
      <h2 className="text-center">
        {filteredGames.length} game{filteredGames.length > 1 && "s"} to play!
      </h2>
      <table className="table table-striped table-borderless">
        <thead>
          <tr>
            <th>Name</th>
            <th>Party Pack</th>
            <th>Players</th>
            <th className="d-none d-sm-table-cell">Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredGames.map((game) => {
            return (
              <tr key={game.name}>
                <td>
                  <a href={game.url}>{game.name}</a>
                </td>
                <td>
                  <a href={game.pack_url}>{game.pack}</a>
                </td>
                <td>
                  {game.minPlayers} - {game.maxPlayers}
                </td>
                <td className="d-none d-sm-table-cell">{game.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GamesTable;
