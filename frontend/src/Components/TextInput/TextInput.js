import React, { useState } from 'react';

const TextInput = ({setValue}) => {
  const [playerName, setPlayerName] = useState('');
  
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Type a player"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <div onClick={() => setValue(playerName)}>Click me</div>
      </form>
    </div>
  );
}

export default TextInput;
