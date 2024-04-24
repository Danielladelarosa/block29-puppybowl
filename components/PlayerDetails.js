// TESTED
import React from 'react';

const PlayerDetails = ({ player }) => {
  return (
    <div>
      <h2>Player Details</h2>
      <p>Name: {player.name}</p>
      <p>Owner: {player.owner}</p>
      <p>Team: {player.team}</p>
    </div>
  );
};

export default PlayerDetails;
