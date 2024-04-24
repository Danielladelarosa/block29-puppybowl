// TESTED
import React, { useState } from 'react';

const CreatePlayerForm = () => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //  form submission
    // reset form fields
    setName('');
    setOwner('');
    setTeam('');
  };

  return (
    <div>
      <h2>Create New Player</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Owner"
          value={owner}
          onChange={(event) => setOwner(event.target.value)}
        />
        <input
          type="text"
          placeholder="Team"
          value={team}
          onChange={(event) => setTeam(event.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePlayerForm;
