import { useEffect, useState } from 'react';
import './App.css';
import PlayerItem from './Components/PlayerItem/PlayerItem';
import TextInput from './Components/TextInput/TextInput';

function App() {
  const [playerInfo, setPlayerInfo] = useState([]);
  const [anwser, setAnwser] = useState([]);

  useEffect(() => {
    getMLBPlayers();
    getAnwser();
    setPlayerInfo([]);
  }, []);

  const getMLBPlayers = () => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:5000/mlb-players`, requestOptions)
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  const getSpecificPlayer = (player) => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:5000//get-player-info/${player}`, requestOptions)
      .then(async (response) => {
        let dataPromise = response.json();
        let data = await dataPromise;
        setPlayerInfo((prevState) => [data, ...prevState]);
        console.log(playerInfo)
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  const getAnwser = () => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:5000/get-picked-mlb-player`, requestOptions)
      .then(async (response) => {
        const data = await response.json();
        setAnwser(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };


  return (
    <div className="App">
      <h1>Welcome to Baseball Wordle!</h1>
      <TextInput setValue={(name) => {
        getSpecificPlayer(name)
      }} />
      {playerInfo.length > 0 
        ? playerInfo.map(
            ({
              name,
              team,
              position,
              league,
              division,
              height,
              bats,
              throws,
              number,
              age,
              birthCountry,
            }) => (
              <ul>
                <li key={name.toLowerCase()}>
                  <PlayerItem
                    name={name}
                    team={team}
                    position={position}
                    league={league}
                    division={division}
                    height={height}
                    bats={bats}
                    throws={throws}
                    number={number}
                    age={age}
                    birthCountry={birthCountry}
                    finalPlayer={anwser}
                  />
                </li>
              </ul>
            )
          )
        : null}
    </div>
  );
}

export default App;
