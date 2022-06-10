import { useEffect } from 'react';
import './App.css';

function App() {
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
        console.log(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    <div className="App">
      <h1>Welcome to Baseball Wordle!</h1>
      <form>
        {/* <input type="text">Pick a Player</input> */}
      </form>
    </div>
  );
}

export default App;
