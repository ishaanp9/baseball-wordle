import React, { useState } from 'react';

function TextInput() {
  const [playerName, setPlayerName] = useState('');

  const getSpecificPlayer = () => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:5000//get-player-info/${playerName}`, requestOptions)
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };


  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Type a player"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <div onClick={() => getSpecificPlayer()}>Click me</div>
      </form>
    </div>
  );
}

export default TextInput;
