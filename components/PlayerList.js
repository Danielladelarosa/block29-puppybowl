// TESTED 
import React from 'react';

const PlayerList = ({ players, onSelect }) => {
  return (
    <div>
      <h2>Players</h2>
      <ul>
        {players.map(player => (
          <li key={player.id} onClick={() => onSelect(player)}>
            {player.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
