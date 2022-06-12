import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const TextInput = ({ setValue }) => {
  const [mlbPlayers, setMlbPlayers] = useState([]);

  useEffect(() => {
    getMLBPlayers();
  }, []);

  const getMLBPlayers = () => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:5000/mlb-players`, requestOptions)
      .then(async (response) => {
        const data = await response.json();
        setMlbPlayers(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    // <div>     
    //   <form>
    //     <input
    //       type="text"
    //       placeholder="Type a player"
    //       value={playerName}
    //       onChange={(e) => setPlayerName(e.target.value)}
    //     />
    //     <div onClick={() => setValue(playerName)}>Click me</div>
    //   </form>
    // </div>

    <Autocomplete
      // className="collegeSearchBar"
      disablePortal
      onChange={(e) => {
        const element = e.target;
        const value = element.innerHTML;
        setValue(value)
      }}
      id="combo-box-demo"
      options={mlbPlayers}
      noOptionsText={
        <p 
        >No MLB Player</p>
      }
      // sx={{ width: "50%", height: "10" }}
      renderInput={(params) => (
        <TextField {...params} label="Search for a mlb player" />
      )}
    />
  );
};

export default TextInput;
