import React from 'react';
import SongForm from './Components/SongForm';
import SongList from './Components/SongList';

function App() {

  return (
    <div className="App">
      <form>
        <h1>Songsaver</h1>
        <SongForm />
      </form>

      <div>
        <h1>Songs</h1>
        <SongList />
      </div>

    </div>
  );
}

export default App;
