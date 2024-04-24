
import React, { useState, useEffect } from 'react';
import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
import SearchBar from './components/SearchBar';
import CreatePlayerForm from './components/CreatePlayerForm';


const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await get('https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players');
      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Puppy Bowl</h1>
      <SearchBar searchText={searchText} onChange={handleSearchChange} />
      <PlayerList players={filteredPlayers} onSelect={handlePlayerSelect} />
      {selectedPlayer && <PlayerDetails player={selectedPlayer} />}
      <CreatePlayerForm />
    </div>
  );
};

export default App;
