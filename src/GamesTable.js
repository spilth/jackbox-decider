import React from 'react';
import games from './games';

function GamesTable({playerCount}) {
    let filteredGames = games.filter(game => {
        return playerCount >= game.minPlayers && playerCount <= game.maxPlayers
    });

    return (
        <table className="table table-sm">
            <thead>
            <tr>
                <th>Name</th>
                <th>Pack</th>
                <th>Players</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {filteredGames.map(game => {
                return (
                    <tr key={game.name}>
                        <td><a href={game.url}>{game.name}</a></td>
                        <td>{game.pack}</td>
                        <td>{game.minPlayers} - {game.maxPlayers}</td>
                        <td>{game.description}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default GamesTable;